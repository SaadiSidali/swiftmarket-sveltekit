import { redirect, type Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

import { sequence } from '@sveltejs/kit/hooks';
import { POCKETBASEURL } from '$lib/utils';
import logger from '@/logger';

const pb = new PocketBase(POCKETBASEURL);
const authHandle: Handle = async ({ event, resolve }) => {
	// Get the auth cookie
	const authCookie = event.cookies.get('pb_auth');
	event.locals.pb = pb;
	let user = null;

	if (authCookie) {
		// Load auth data from cookie
		pb.authStore.loadFromCookie(authCookie);

		// Verify the auth is still valid
		try {
			if (pb.authStore.isValid) {
				user = await pb.collection('users').authRefresh();
				logger.info(user);
				event.locals.user = user;
			}
		} catch (error) {
			// Auth is invalid, clear it
			pb.authStore.clear();
			event.locals.user = null;
			user = null;
		}
	}

	const response = await resolve(event);

	// Save auth state to cookie
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ secure: false }));

	return response;
};

const protectHandle: Handle = async ({ event, resolve }) => {
	// if the error is 404, do not protect
	if (event.url.pathname.startsWith('/admin') && event.locals.user) {
		if (event.locals.user?.record?.role !== 'admin') {
			redirect(302, '/');
		}
	}

	return resolve(event);
};

const secondHandle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	return response;
};

export const handle = sequence(authHandle, protectHandle, secondHandle);
