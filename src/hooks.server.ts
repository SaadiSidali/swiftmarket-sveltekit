import { redirect, type Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

import { sequence } from '@sveltejs/kit/hooks';
import { POCKETBASEURL } from '$lib/utils';

const pb = new PocketBase(POCKETBASEURL);
const firstHandle: Handle = async ({ event, resolve }) => {
	// Get the auth cookie
	const authCookie = event.cookies.get('pb_auth');
	event.locals.pb = pb;

	if (authCookie) {
		// Load auth data from cookie
		pb.authStore.loadFromCookie(authCookie);

		// Verify the auth is still valid
		try {
			if (pb.authStore.isValid) {
				await pb.collection('users').authRefresh();
				event.locals.user = pb.authStore.record;
			}
		} catch (error) {
			// Auth is invalid, clear it
			pb.authStore.clear();
			event.locals.user = null;
		}
	}

	// Protect admin routes
	if (event.url.pathname.startsWith('/admin')) {
		if (!event.locals.user) {
			throw redirect(302, '/login?redirect=' + encodeURIComponent(event.url.pathname));
		}
	}

	const response = await resolve(event);

	// Save auth state to cookie
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ secure: false }));

	return response;
};

const secondHandle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	console.log('response status:', response);
	return response;
};

export const handle = sequence(firstHandle, secondHandle);
