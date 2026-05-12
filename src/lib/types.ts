export type IngredientFunction =
	| 'emollient'
	| 'humectant'
	| 'surfactant'
	| 'active'
	| 'preservative'
	| 'thickener'
	| 'other';

export type SafetyRating = 'safe' | 'moderate' | 'caution';

/** Full ingredient record — matches ingredients_enriched.json */
export interface Ingredient {
	inci: string;
	trade_names: string[];
	formulation_count: number;
	product_names: string[];
	total_occurrences: number;
	// enriched fields (absent on unenriched items)
	function?: IngredientFunction;
	safety_rating?: SafetyRating;
	common_name?: string;
	description?: string;
	typical_concentration?: string;
}

/** Slimmed-down record used on the homepage grid (no product_names / trade_names) */
export interface IngredientSummary {
	inci: string;
	slug: string;
	common_name: string | null;
	function: IngredientFunction | null;
	safety_rating: SafetyRating | null;
	formulation_count: number;
	typical_concentration: string | null;
}
