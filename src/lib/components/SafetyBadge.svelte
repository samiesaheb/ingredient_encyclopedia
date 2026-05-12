<script lang="ts">
	import { SAFETY_META } from '$lib/ingredients.js';
	import type { SafetyRating } from '$lib/types.js';

	let { value }: { value: SafetyRating | null } = $props();

	const meta = $derived(value ? SAFETY_META[value] : null);
</script>

{#if meta}
	<span class="badge {meta.classes}">{meta.label}</span>
{/if}
