// src/lib/pocketbase.js
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';
import { POCKETBASEURL } from './utils';

export const pb = new PocketBase(POCKETBASEURL);

// Auth store
export const currentUser = writable(pb.authStore.record);

// Subscribe to auth changes
pb.authStore.onChange((auth) => {
	console.log('authStore changed', auth);
	currentUser.set(pb.authStore.record);
});

// Auth functions
export const login = async (email: string, password: string) => {
	try {
		const authData = await pb.collection('users').authWithPassword(email, password);
		currentUser.set(authData.record);
		return { success: true, user: authData.record };
	} catch (error: unknown) {
		console.error('Login error:', error);
		const errorMessage = error instanceof Error ? error.message : String(error);
		return { success: false, error: errorMessage };
	}
};

export const logout = () => {
	pb.authStore.clear();
	currentUser.set(null);
};

export const register = async (email: string, password: string, passwordConfirm: string) => {
	try {
		const data = {
			email,
			password,
			passwordConfirm,
			emailVisibility: true
		};

		const record = await pb.collection('users').create(data);

		// Auto login after registration
		await login(email, password);

		return { success: true, user: record };
	} catch (error: unknown) {
		console.error('Registration error:', error);
		const errorMessage = error instanceof Error ? error.message : String(error);
		return { success: false, error: errorMessage };
	}
};

// Check if user is authenticated
export const isAuthenticated = () => {
	return pb.authStore.isValid;
};
