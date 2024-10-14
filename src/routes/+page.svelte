<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { enhance } from '$app/forms';
	import {
		base_food_list,
		BaseFood,
		Food,
		Preparation,
		preparation_list,
		Protein,
		protein_list,
		Sauce,
		sauces_list,
		Spice,
		Vegetable,
		vegtables_list
	} from './foods';
	import Slotmachine from './Slotmachine.svelte';

	const random_int = (value: number) => {
		return Math.floor(Math.random() * value);
	};
	let base: BaseFood | undefined;
	let trigger_base: (_: number) => void;
	const base_foods_images = base_food_list.map((item) => item.name);
	let base_loops = random_int(10);

	let protein: Protein | undefined;
	let trigger_protein: (_: number) => void;
	const protein_images = protein_list.map((item) => item.name);
	let protein_loops = random_int(10);

	let vegetable: Vegetable | undefined;
	let trigger_vegetable: (_: number) => void;
	const vegetable_images = vegtables_list.map((item) => item.name);
	let vegetable_loops = random_int(10);

	let sauce: Sauce | undefined;
	let trigger_sauce: (_: number) => void;
	const sauce_images = sauces_list.map((item) => item.name);
	let sauce_loops = random_int(10);

	let spice: Spice | undefined;
	let trigger_spice: (_: number) => void;
	$: spice_images = (sauce ? sauce.spice_list : sauces_list[0].spice_list).map((item) => item.name);
	let spice_loops = random_int(10);

	let preparation: Preparation | undefined;
	let trigger_preparation: (_: number) => void;
	const preparation_images = preparation_list.map((item) => item.name);
	let preparation_loops = random_int(10);
</script>

<h1>Schneide eine Zwiebel</h1>
<h2>und dann</h2>

<div class="slotmachine-list">
	<Slotmachine list={base_foods_images} bind:trigger={trigger_base} loops={base_loops} />
	<Slotmachine list={protein_images} bind:trigger={trigger_protein} loops={protein_loops} />
	<Slotmachine list={vegetable_images} bind:trigger={trigger_vegetable} loops={vegetable_loops} />
	<Slotmachine list={sauce_images} bind:trigger={trigger_sauce} loops={sauce_loops} />
	<Slotmachine list={spice_images} bind:trigger={trigger_spice} loops={spice_loops} />
	<Slotmachine
		list={preparation_images}
		bind:trigger={trigger_preparation}
		loops={preparation_loops}
	/>
</div>
<form
	method="POST"
	action="?/enter"
	use:enhance={() => {
		// prevent default callback from resetting the form
		return ({ update, result }) => {
			if (result) {
				const menu = JSON.parse(result.data);
				base = base_food_list[menu.base_index];
				preparation = preparation_list[menu.preparation_index];
				protein = protein_list[menu.protein_index];
				vegetable = vegtables_list[menu.vegetable_index];
				sauce = sauces_list[menu.sauce_index];
				spice = sauce.get_spice(menu.spice_index);
				trigger_base(menu.base_index);
				trigger_preparation(menu.preparation_index);
				trigger_protein(menu.protein_images);
				trigger_vegetable(menu.vegetable_index);
				trigger_sauce(menu.sauce_index);
				trigger_spice(menu.spice_index);
			}
			update({ reset: false });
		};
	}}
	class="play-wrapper"
>
	<button data-key="enter" formaction="?/restart"> {base ? 'Get another menu' : 'Get menu'} </button>
</form>

<style lang="scss">
	h1 {
		font-size: 20px;
	}
	h2 {
		text-align: center;
	}
	.slotmachine-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 15px;
		width: 100%;
	}
	.play-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
	}
</style>
