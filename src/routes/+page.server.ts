import type { PageServerLoad } from './$types';
import { getIngredients, toSummary } from '$lib/ingredients';

export const load: PageServerLoad = () => {
	const all = getIngredients();
	const ingredients = all.map(toSummary);

	// Append a counter to duplicate slugs so every card has a unique URL
	const slugCount = new Map<string, number>();
	for (const item of ingredients) slugCount.set(item.slug, (slugCount.get(item.slug) ?? 0) + 1);
	const slugUsed = new Map<string, number>();
	for (const item of ingredients) {
		if ((slugCount.get(item.slug) ?? 0) > 1) {
			const n = (slugUsed.get(item.slug) ?? 0) + 1;
			slugUsed.set(item.slug, n);
			if (n > 1) item.slug = `${item.slug}-${n}`;
		}
	}

	return { ingredients, total: all.length };
};
