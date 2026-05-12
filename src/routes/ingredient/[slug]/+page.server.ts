import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { findBySlug } from '$lib/ingredients';

export const load: PageServerLoad = ({ params }) => {
	const ingredient = findBySlug(params.slug);

	if (!ingredient) {
		error(404, `No ingredient found for "${params.slug}"`);
	}

	return { ingredient };
};
