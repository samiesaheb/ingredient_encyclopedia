<script lang="ts">
	import type { IngredientSummary } from '$lib/types.js';
	import FunctionBadge from './FunctionBadge.svelte';
	import SafetyBadge from './SafetyBadge.svelte';

	let { ingredient }: { ingredient: IngredientSummary } = $props();
</script>

<a
	href="/ingredient/{ingredient.slug}"
	class="group flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4
	       shadow-sm transition hover:border-indigo-300 hover:shadow-md"
>
	<!-- name -->
	<div>
		<p class="break-words text-xs font-medium uppercase tracking-wide text-slate-400">
			{ingredient.inci}
		</p>
		{#if ingredient.common_name}
			<h3 class="mt-0.5 break-words text-base font-semibold text-slate-800 group-hover:text-indigo-700">
				{ingredient.common_name}
			</h3>
		{:else}
			<h3 class="mt-0.5 text-base font-semibold italic text-slate-500">
				No common name
			</h3>
		{/if}
	</div>

	<!-- badges -->
	<div class="flex flex-wrap gap-1.5">
		<FunctionBadge value={ingredient.function} />
		<SafetyBadge value={ingredient.safety_rating} />
	</div>

	<!-- footer -->
	<div class="mt-auto flex items-center justify-between pt-1 text-xs text-slate-500">
		<span>
			{ingredient.formulation_count.toLocaleString()}
			{ingredient.formulation_count === 1 ? 'formulation' : 'formulations'}
		</span>
		{#if ingredient.typical_concentration}
			<span class="font-mono">{ingredient.typical_concentration}</span>
		{/if}
	</div>
</a>
