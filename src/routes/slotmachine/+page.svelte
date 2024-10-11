<script lang="ts">
    import { confetti } from '@neoconfetti/svelte';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;

    $: base_food = data.base_food;
    $: preparation = data.preparation;
    $: spice = data.spice;
    $: vegetable = data.vegetable;
    $: sauce = data.sauce;
</script>
<p>Schneide eine Zwiebel und bereite dann etwas {base_food} vor. {preparation} {spice} {vegetable} {sauce} </p>