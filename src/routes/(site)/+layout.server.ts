import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';
import { env as penv } from '$env/dynamic/public';
import type { LayoutServerLoad } from './$types';
import { normalizeRecordsForClient } from '@/utils';

export const load: LayoutServerLoad = async () => {
	const pb = new PocketBase(penv.PUBLIC_POCKETBASE_URL);
	await pb
		.collection('_superusers')
		.authWithPassword(env.POCKETBASE_ADMIN_EMAIL!, env.POCKETBASE_ADMIN_PASSWORD!);

	const configRecords = await pb
		.collection<ConfigRecord>('config')
		.getFullList(1, { sort: '-created' });

	const config = normalizeRecordsForClient(configRecords);
	return { config };
};
