<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { enhance } from '$app/forms';
	import Slotmachine from './Slotmachine.svelte';
	import { carbs_list, type Carbs } from './carbs';
	import { Protein, protein_list } from './protein';
	import { vegtables_list, type Vegetable } from './vegtable';
	import { Sauce, sauces_list } from './sauce';
	import { preparation_list, type Preparation } from './preparation';
	import type { Spice } from './spice';

	const random_int = (value: number) => {
		return 2 + Math.floor(Math.random() * value);
	};
	let carbs: Carbs | undefined;
	let trigger_carbs: (_: number) => void;
	const carb_image = carbs_list.map((item) => item.image);
	let base_loops = random_int(5);

	let protein: Protein | undefined;
	let trigger_protein: (_: number) => void;
	const protein_images = protein_list.map((item) => item.image);
	let protein_loops = random_int(5);

	let vegetable: Vegetable | undefined;
	let trigger_vegetable: (_: number) => void;
	const vegetable_images = vegtables_list.map((item) => item.image);
	let vegetable_loops = random_int(5);

	let sauce: Sauce | undefined;
	let trigger_sauce: (_: number) => void;
	const sauce_images = sauces_list.map((item) => item.image);
	let sauce_loops = random_int(5);

	let spice: Spice | undefined;
	let trigger_spice: (_: number) => void;
	$: spice_images = (sauce ? sauce.spice_list : sauces_list[0].spice_list).map(
		(item) => item.image
	);
	let spice_loops = random_int(5);

	let preparation: Preparation | undefined;
	let trigger_preparation: (_: number) => void;
	const preparation_images = preparation_list.map((item) => item.image);
	let preparation_loops = random_int(5);
</script>

<h1>Schneide eine Zwiebel</h1>
<h2>und dann</h2>

<div class="slotmachine-list">
	<div class="slotitem">
		<Slotmachine list={carb_image} bind:trigger={trigger_carbs} loops={base_loops} />
	</div>
	<div class="slotitem">
		<Slotmachine list={protein_images} bind:trigger={trigger_protein} loops={protein_loops} />
	</div>
	<div class="slotitem">
		<Slotmachine list={vegetable_images} bind:trigger={trigger_vegetable} loops={vegetable_loops} />
	</div>
	<div class="slotitem">
		<Slotmachine list={sauce_images} bind:trigger={trigger_sauce} loops={sauce_loops} />
	</div>
	<div class="slotitem">
		<Slotmachine list={spice_images} bind:trigger={trigger_spice} loops={spice_loops} />
	</div>
	<div class="slotitem">
		<Slotmachine
			list={preparation_images}
			bind:trigger={trigger_preparation}
			loops={preparation_loops}
		/>
	</div>
</div>
<form
	method="POST"
	action="?/enter"
	use:enhance={() => {
		// prevent default callback from resetting the form
		return ({ update, result }) => {
			if (result) {
				const menu = JSON.parse(result.data);
				carbs = carbs_list[menu.carbs_index];
				preparation = preparation_list[menu.preparation_index];
				protein = protein_list[menu.protein_index];
				vegetable = vegtables_list[menu.vegetable_index];
				sauce = sauces_list[menu.sauce_index];
				spice = sauce.get_spice(menu.spice_index);
				trigger_carbs(menu.carbs_index);
				trigger_preparation(menu.preparation_index);
				trigger_protein(menu.protein_index);
				trigger_vegetable(menu.vegetable_index);
				trigger_sauce(menu.sauce_index);
				trigger_spice(menu.spice_index);
			}
			update({ reset: false });
		};
	}}
	class="play-wrapper"
>
	<button data-key="enter" formaction="?/restart"> </button>
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
		width: 100%;
		max-width: 300px;
		margin: auto;
		.slotitem {
			width: calc(50% - 50px);
			align-items: center;
			align-content: center;
			display: flex;
			padding: 25px;
		}
	}
	.play-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
	}

	button {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: rgb(183, 9, 0);
		text-shadow: 0 3px 1px rgba(122, 17, 8, 0.8);
		box-shadow: 0 8px 0 rgb(183, 9, 0);
		cursor: pointer;
	}
</style>
