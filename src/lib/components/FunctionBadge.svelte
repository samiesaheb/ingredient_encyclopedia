<script lang="ts">
	import { FUNCTION_META } from '$lib/ingredients.js';
	import type { IngredientFunction } from '$lib/types.js';

	let { value }: { value: IngredientFunction | null } = $props();

	const meta = $derived(value ? FUNCTION_META[value] : null);
</script>

{#if meta}
	<span class="badge {meta.classes}">{meta.label}</span>
{/if}
