<script lang="ts">
	import type { PageData } from './$types';
	import FunctionBadge from '$lib/components/FunctionBadge.svelte';
	import SafetyBadge from '$lib/components/SafetyBadge.svelte';

	let { data }: { data: PageData } = $props();
	const i = $derived(data.ingredient);
</script>

<svelte:head>
	<title>{i.common_name ?? i.inci} — Ingredient Encyclopedia</title>
	<meta name="description" content={i.description ?? `${i.inci} cosmetic ingredient.`} />
</svelte:head>

<!-- breadcrumb -->
<nav class="mb-6 text-sm text-slate-500">
	<a href="/" class="hover:text-indigo-600">← Back to all ingredients</a>
</nav>

<div class="grid gap-8 lg:grid-cols-3">
	<!-- main content -->
	<div class="lg:col-span-2 space-y-6">

		<!-- header -->
		<div>
			<p class="text-xs font-semibold uppercase tracking-widest text-slate-400">INCI Name</p>
			<h1 class="mt-1 text-3xl font-bold text-slate-800">{i.inci}</h1>
			{#if i.common_name && i.common_name !== i.inci}
				<p class="mt-1 text-xl text-slate-500">{i.common_name}</p>
			{/if}
			<div class="mt-3 flex flex-wrap gap-2">
				<FunctionBadge value={i.function ?? null} />
				<SafetyBadge value={i.safety_rating ?? null} />
			</div>
		</div>

		<!-- description -->
		{#if i.description}
			<section>
				<h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">About</h2>
				<p class="text-base leading-relaxed text-slate-700">{i.description}</p>
			</section>
		{/if}

		<!-- trade names -->
		{#if i.trade_names.length > 0}
			<section>
				<h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
					Trade Names ({i.trade_names.length})
				</h2>
				<div class="flex flex-wrap gap-2">
					{#each i.trade_names as name}
						<span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{name}</span>
					{/each}
				</div>
			</section>
		{/if}

		<!-- top products -->
		{#if i.product_names.length > 0}
			<section>
				<h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
					Appears In ({i.product_names.length} products)
				</h2>
				<ul class="space-y-1 text-sm text-slate-600">
					{#each i.product_names.slice(0, 15) as name}
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400"></span>
							{name}
						</li>
					{/each}
					{#if i.product_names.length > 15}
						<li class="text-slate-400 italic">
							+ {i.product_names.length - 15} more…
						</li>
					{/if}
				</ul>
			</section>
		{/if}
	</div>

	<!-- sidebar stats -->
	<aside class="space-y-4">
		<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
			<h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
				At a Glance
			</h2>
			<dl class="space-y-3 text-sm">
				{#if i.function}
					<div class="flex justify-between">
						<dt class="text-slate-500">Function</dt>
						<dd class="font-medium text-slate-700 capitalize">{i.function}</dd>
					</div>
				{/if}
				{#if i.safety_rating}
					<div class="flex justify-between">
						<dt class="text-slate-500">Safety</dt>
						<dd class="font-medium text-slate-700 capitalize">{i.safety_rating}</dd>
					</div>
				{/if}
				{#if i.typical_concentration}
					<div class="flex justify-between">
						<dt class="text-slate-500">Typical use</dt>
						<dd class="font-mono text-slate-700">{i.typical_concentration}</dd>
					</div>
				{/if}
				<div class="flex justify-between border-t border-slate-100 pt-3">
					<dt class="text-slate-500">Formulations</dt>
					<dd class="font-semibold text-slate-800">{i.formulation_count.toLocaleString()}</dd>
				</div>
				<div class="flex justify-between">
					<dt class="text-slate-500">Occurrences</dt>
					<dd class="font-semibold text-slate-800">{i.total_occurrences.toLocaleString()}</dd>
				</div>
				<div class="flex justify-between">
					<dt class="text-slate-500">Trade names</dt>
					<dd class="font-semibold text-slate-800">{i.trade_names.length}</dd>
				</div>
			</dl>
		</div>
	</aside>
</div>
