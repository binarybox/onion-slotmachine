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

	type TriggerMethod = (index: number, title: string) => void;

	let carbs: Carbs | undefined;
	let trigger_carbs: TriggerMethod;
	const carb_image = carbs_list.map((item) => item.image);

	let protein: Protein | undefined;
	let trigger_protein: TriggerMethod;
	const protein_images = protein_list.map((item) => item.image);

	let vegetable: Vegetable | undefined;
	let trigger_vegetable: TriggerMethod;
	const vegetable_images = vegtables_list.map((item) => item.image);

	let sauce: Sauce | undefined;
	let trigger_sauce: TriggerMethod;
	const sauce_images = sauces_list.map((item) => item.image);

	let spice: Spice | undefined;
	let trigger_spice: TriggerMethod;
	$: spice_images = (sauce ? sauce.spice_list : sauces_list[0].spice_list).map(
		(item) => item.image
	);

	let preparation: Preparation | undefined;
	let trigger_preparation: TriggerMethod;
	const preparation_images = preparation_list.map((item) => item.image);
</script>

<h1>Schneide eine Zwiebel</h1>
<h2>und dann</h2>

<div class="slotmachine-list">
	<div class="slotitem">
		<Slotmachine list={carb_image} bind:trigger={trigger_carbs} />
	</div>
	<div class="slotitem">
		<Slotmachine list={protein_images} bind:trigger={trigger_protein} />
	</div>
	<div class="slotitem">
		<Slotmachine list={vegetable_images} bind:trigger={trigger_vegetable} />
	</div>
	<div class="slotitem">
		<Slotmachine list={sauce_images} bind:trigger={trigger_sauce} />
	</div>
	<div class="slotitem">
		<Slotmachine list={spice_images} bind:trigger={trigger_spice} />
	</div>
	<div class="slotitem">
		<Slotmachine list={preparation_images} bind:trigger={trigger_preparation} />
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
				trigger_carbs(menu.carbs_index, carbs.name);
				trigger_preparation(menu.preparation_index, preparation.name);
				trigger_protein(menu.protein_index, protein.name);
				trigger_vegetable(menu.vegetable_index, vegetable.name);
				trigger_sauce(menu.sauce_index, sauce.name);
				trigger_spice(menu.spice_index, spice.name);
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
		max-width: 400px;
		margin: auto;
		.slotitem {
			width: calc(50% - 20px);
			align-items: center;
			align-content: center;
			display: flex;
			padding: 10px;
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
