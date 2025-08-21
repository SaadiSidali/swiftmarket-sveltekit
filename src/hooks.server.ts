import { env } from '$env/dynamic/public';
import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

import { sequence } from '@sveltejs/kit/hooks';
import { POCKETBASEURL } from '$lib/utils';

const pb = new PocketBase(POCKETBASEURL);
const firstHandle: Handle = async ({ event, resolve }) => {
	event.locals.pb = pb;
	const response = await resolve(event);

	return response;
};

const secondHandle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	console.log('response status:', response);
	return response;
};

export const handle = sequence(firstHandle, secondHandle);
