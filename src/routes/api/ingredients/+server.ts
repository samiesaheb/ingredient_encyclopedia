import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { filterIngredients, toSlug } from '$lib/ingredients';

/**
 * GET /api/ingredients
 *
 * Query params:
 *   q        — full-text search across inci, common_name, description
 *   function — filter by function (emollient|humectant|surfactant|active|preservative|thickener|other)
 *   safety   — filter by safety_rating (safe|moderate|caution)
 *   limit    — max results (default 200, max 1000)
 *   offset   — pagination offset (default 0)
 *
 * Returns: JSON array of full Ingredient objects (including product_names).
 */
export const GET: RequestHandler = ({ url }) => {
	const q       = url.searchParams.get('q');
	const fn      = url.searchParams.get('function');
	const safety  = url.searchParams.get('safety');
	const limit   = Math.min(parseInt(url.searchParams.get('limit') ?? '200', 10), 1000);
	const offset  = parseInt(url.searchParams.get('offset') ?? '0', 10);

	const results = filterIngredients(q, fn, safety);
	const page    = results.slice(offset, offset + limit);

	return json(
		{
			total: results.length,
			limit,
			offset,
			data: page.map((i) => ({ ...i, slug: toSlug(i.inci) }))
		},
		{
			headers: {
				'Cache-Control': 'public, max-age=3600',
				'Access-Control-Allow-Origin': '*'
			}
		}
	);
};
