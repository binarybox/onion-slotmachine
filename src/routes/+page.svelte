<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	import { enhance } from '$app/forms';
	import {
		base_food_list,
		BaseFood,
		Food,
		Preparation,
		preparation_list,
		protein_list,
		Sauce,
		sauces_list,
		Spice,
		vegtables_list
	} from './foods';

	let base: BaseFood | undefined;
	let preparation: Preparation | undefined;
	let protein: Food | undefined;
	let spice: Spice | undefined;
	let vegetable: Food | undefined;
	let sauce: Sauce | undefined;
</script>

<div class="slotmachine">
	{#if vegetable }
	<img class="slotimage" src={vegetable.image} alt="Image" />
		<!-- <img class="slotimage" src="/src/lib/{vegetable.image}" alt="Image" /> -->
		<p>
			Schneide eine Zwiebel und bereite dann etwas {base?.name} vor. {preparation?.name}
			{spice?.name}
			{vegetable?.name}
			{sauce?.name}
		</p>
	{/if}
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
			}
			update({ reset: false });
		};
	}}
>
	<button data-key="enter" formaction="?/restart"> {base? "play again?" : "play" } </button>
</form>

<style lang="scss">
	.slotmachine {
		.slotimage {
			width: 150px;
		}
	}
</style>