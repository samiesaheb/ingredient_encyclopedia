<script lang="ts">
	import type { PageData } from './$types';
	import IngredientCard from '$lib/components/IngredientCard.svelte';
	import { FUNCTION_META, SAFETY_META } from '$lib/ingredients.js';

	let { data }: { data: PageData } = $props();

	let query          = $state('');
	let activeFunction = $state('all');
	let activeSafety   = $state('all');
	let sortBy         = $state<'frequency' | 'alpha'>('frequency');

	const FUNCTIONS = Object.keys(FUNCTION_META) as (keyof typeof FUNCTION_META)[];
	const SAFETIES  = Object.keys(SAFETY_META)  as (keyof typeof SAFETY_META)[];

	const filtered = $derived.by(() => {
		const q = query.trim().toLowerCase();
		let list = data.ingredients.filter((i) => {
			if (activeFunction !== 'all' && i.function !== activeFunction) return false;
			if (activeSafety   !== 'all' && i.safety_rating !== activeSafety) return false;
			if (q) {
				return (
					i.inci.toLowerCase().includes(q) ||
					(i.common_name?.toLowerCase().includes(q) ?? false)
				);
			}
			return true;
		});
		if (sortBy === 'alpha') {
			list = [...list].sort((a, b) =>
				(a.common_name ?? a.inci).localeCompare(b.common_name ?? b.inci)
			);
		}
		return list;
	});
</script>

<svelte:head>
	<title>Ingredient Encyclopedia — Sky High International</title>
</svelte:head>

<!-- hero / search -->
<div class="mb-8">
	<h1 class="mb-1 text-3xl font-bold text-slate-800">Ingredient Encyclopedia</h1>
	<p class="text-slate-500">
		{data.total.toLocaleString()} unique INCI ingredients sourced from 1,800+ formulations.
	</p>

	<div class="mt-4 flex flex-col gap-3 sm:flex-row">
		<input
			type="search"
			bind:value={query}
			placeholder="Search by INCI or common name…"
			class="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm
			       shadow-sm placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none
			       focus:ring-2 focus:ring-indigo-200 sm:max-w-sm"
		/>
		<select
			bind:value={sortBy}
			class="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm
			       shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
		>
			<option value="frequency">Sort: Most used</option>
			<option value="alpha">Sort: A → Z</option>
		</select>
	</div>
</div>

<!-- function filter pills -->
<div class="mb-3 flex flex-wrap gap-2">
	{#each FUNCTIONS as fn}
		<button
			onclick={() => (activeFunction = fn)}
			class="badge cursor-pointer transition
			       {activeFunction === fn
			         ? FUNCTION_META[fn].classes + ' ring-2 ring-offset-1 ring-current'
			         : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}"
		>
			{FUNCTION_META[fn].label}
		</button>
	{/each}
</div>

<!-- safety filter pills -->
<div class="mb-6 flex flex-wrap gap-2">
	{#each SAFETIES as s}
		<button
			onclick={() => (activeSafety = s)}
			class="badge cursor-pointer transition
			       {activeSafety === s
			         ? SAFETY_META[s].classes + ' ring-2 ring-offset-1 ring-current'
			         : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}"
		>
			{SAFETY_META[s].label}
		</button>
	{/each}
</div>

<!-- result count -->
<p class="mb-4 text-sm text-slate-500">
	{filtered.length.toLocaleString()} ingredient{filtered.length === 1 ? '' : 's'}
	{#if query || activeFunction !== 'all' || activeSafety !== 'all'}
		matching current filters
	{/if}
</p>

<!-- grid -->
{#if filtered.length === 0}
	<div class="py-16 text-center text-slate-400">
		<p class="text-lg">No ingredients match your search.</p>
		<button
			onclick={() => { query = ''; activeFunction = 'all'; activeSafety = 'all'; }}
			class="mt-3 text-sm text-indigo-600 hover:underline"
		>
			Clear filters
		</button>
	</div>
{:else}
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each filtered as ingredient (ingredient.inci)}
			<IngredientCard {ingredient} />
		{/each}
	</div>
{/if}
