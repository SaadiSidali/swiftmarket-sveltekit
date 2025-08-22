import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

import { sequence } from '@sveltejs/kit/hooks';
import { POCKETBASEURL } from '$lib/utils';

const pb = new PocketBase(POCKETBASEURL);
const firstHandle: Handle = async ({ event, resolve }) => {
	event.locals.pb = pb;
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		event.locals.pb.authStore.isValid && (await event.locals.pb.collection('users').authRefresh());
	} catch (_) {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
};

const secondHandle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	console.log('response status:', response);
	return response;
};

export const handle = sequence(firstHandle, secondHandle);
