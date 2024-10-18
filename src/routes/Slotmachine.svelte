<script lang="ts">
	export let list: string[];
	let finish_index: number = 0;
	let loops: number = 0;
	let spin_animation_time: number = 0;
	let item_title = '  ';

	enum Animation {
		stop = 'stop',
		spin = 'spin'
	}

	enum Text {
		hide = 'hide',
		show = 'show'
	}

	$: animated_list = Array.from({ length: loops + 1 }, () => list).flat();

	$: end_top = (finish_index + loops * list.length) * (-1 * 100);

	let animation: Animation = Animation.stop;
	let text_state = Text.hide;

	let animate = false;
	export function trigger(index: number, title: string) {
		if (!animate) {
			animate = true;
			finish_index = index;
			animation = Animation.stop;
			text_state = Text.hide;

			// yanking around with these values gave us decent results.
			// Yanking around a little bit more can make it look awesome
			loops = 8 + Math.floor(Math.random() * 10);
			spin_animation_time = 2000 + Math.floor(Math.random() * 5000);

			setTimeout(() => {
				item_title = title;
			}, 200);

			// block the animation
			setTimeout(() => {
				animate = false;
				text_state = Text.show;
			}, spin_animation_time);

			setTimeout(() => {
				animation = Animation.spin;
			}, 5); // short delay is needed to reset the top position
		}
	}
</script>

<div class="slotmachine-box">
	<div class="slottitle"><div class={text_state}>{item_title}</div></div>
	<div
		style="--list-items: {list.length}; --spin-animation-time: {spin_animation_time}ms; --end-top: {end_top}px;"
		class="slotmachine-window"
	>
		<div class={[animation, 'slotlist'].join(' ')}>
			{#each animated_list as item}
				<div class="slotitem">
					<img src={item} alt={item} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	$item_height: 100px;
	$item_width: 150px;
	@keyframes spin_animation {
		0% {
			top: calc(var(--list-items) * $item_height * -1);
		}
		100% {
			top: var(--end-top);
		}
	}
	.slottitle {
		padding: 5px 0;
		font-weight: bold;
		width: $item_width;
		height: 19px;
		text-align: center;
		background-color: gold;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		& > * {
			transition: opacity 200ms ease;
			&.hide {
				opacity: 0;
			}
			&.show {
				opacity: 1;
			}
		}
	}
	.slotmachine-window {
		position: relative;
		width: $item_width;
		height: $item_height;
		overflow: hidden;
		margin: auto;
		.slotitem {
			width: $item_width;
			height: $item_height;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: white;
			img {
				height: 100%;
			}
		}

		.slotlist {
			position: absolute;
			&.spin {
				top: var(--end-top);
				animation-name: spin_animation;
				animation-duration: var(--spin-animation-time);
				animation-timing-function: ease-out;
			}
		}
	}
</style>
