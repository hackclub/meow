import type { PageServerLoad } from './$types';
import { COUNTER_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	await fetch('https://api.counterapi.dev/v2/alex-van-dorens-team-1946/first-counter-1946/up', {
		headers: {
			'Authorization': `Bearer ${COUNTER_KEY}`
		}
	});

	return {};
};
