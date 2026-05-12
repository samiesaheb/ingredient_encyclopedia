import type { Ingredient, IngredientFunction, IngredientSummary } from './types.js';

// ── data loading ────────────────────────────────────────────────────────────
// Import directly so Vite/SvelteKit bundles the JSON with the server functions.
// Replace src/lib/data/ingredients_enriched.json with the output of
// enrich_ingredients.py and re-run `npm run build`.
import rawData from './data/ingredients_enriched.json';

const ingredients = rawData as Ingredient[];

export function getIngredients(): Ingredient[] {
	return ingredients;
}

// ── slug helpers ─────────────────────────────────────────────────────────────

export function toSlug(inci: string): string {
	return inci
		.toLowerCase()
		.replace(/[()[\]]+/g, '')    // strip parens/brackets
		.replace(/[^a-z0-9]+/g, '-') // non-alphanumeric → dash
		.replace(/^-+|-+$/g, '');    // trim leading/trailing dashes
}

export function findBySlug(slug: string): Ingredient | undefined {
	return ingredients.find((i) => toSlug(i.inci) === slug);
}

// ── filtering ────────────────────────────────────────────────────────────────

export function filterIngredients(
	q?: string | null,
	fn?: string | null,
	safety?: string | null
): Ingredient[] {
	return ingredients.filter((i) => {
		if (fn && fn !== 'all' && i.function !== fn) return false;
		if (safety && safety !== 'all' && i.safety_rating !== safety) return false;
		if (q) {
			const lower = q.toLowerCase();
			return (
				i.inci.toLowerCase().includes(lower) ||
				(i.common_name?.toLowerCase().includes(lower) ?? false) ||
				(i.description?.toLowerCase().includes(lower) ?? false)
			);
		}
		return true;
	});
}

// ── summary projection ───────────────────────────────────────────────────────

export function toSummary(i: Ingredient): IngredientSummary {
	return {
		inci: i.inci,
		slug: toSlug(i.inci),
		common_name: i.common_name ?? null,
		function: i.function ?? null,
		safety_rating: i.safety_rating ?? null,
		formulation_count: i.formulation_count,
		typical_concentration: i.typical_concentration ?? null
	};
}

// ── badge config (shared by components + SSR) ────────────────────────────────

export const FUNCTION_META: Record<
	IngredientFunction | 'all',
	{ label: string; classes: string }
> = {
	all:          { label: 'All',          classes: 'bg-slate-100 text-slate-700'   },
	emollient:    { label: 'Emollient',    classes: 'bg-amber-100 text-amber-800'   },
	humectant:    { label: 'Humectant',    classes: 'bg-sky-100 text-sky-800'       },
	surfactant:   { label: 'Surfactant',   classes: 'bg-violet-100 text-violet-800' },
	active:       { label: 'Active',       classes: 'bg-emerald-100 text-emerald-800'},
	preservative: { label: 'Preservative', classes: 'bg-rose-100 text-rose-800'     },
	thickener:    { label: 'Thickener',    classes: 'bg-orange-100 text-orange-800' },
	other:        { label: 'Other',        classes: 'bg-slate-100 text-slate-600'   }
};

export const SAFETY_META: Record<
	'safe' | 'moderate' | 'caution' | 'all',
	{ label: string; classes: string }
> = {
	all:      { label: 'All',      classes: 'bg-slate-100 text-slate-700'   },
	safe:     { label: 'Safe',     classes: 'bg-green-100 text-green-800'   },
	moderate: { label: 'Moderate', classes: 'bg-yellow-100 text-yellow-800' },
	caution:  { label: 'Caution',  classes: 'bg-red-100 text-red-800'       }
};
