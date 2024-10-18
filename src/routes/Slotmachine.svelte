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

	$: animated_list = Array.from({ length: loops + 2 }, () => list).flat();

	$: end_top = (finish_index + loops * list.length) * (-1 * 75);

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
			console.log(Math.floor(11 / list.length));
			loops = 1 + Math.floor(11 / list.length) + Math.floor(Math.random() * 3);
			spin_animation_time = 3000 + Math.floor(Math.random() * ((11 / list.length) * 1000));

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
	$item_height: 75px;
	$item_width: 100px;
	@keyframes spin_animation {
		0% {
			top: calc(var(--list-items) * $item_height * -1);
		}
		100% {
			top: var(--end-top);
		}
	}
	.slotmachine-box {
		background-color: gold;
		border-radius: 5px;
		padding: 6px;
		margin: auto;
	}
	.slottitle {
		padding: 5px 0;
		font-weight: bold;
		width: 150px;
		height: 19px;
		text-align: center;
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
		height: $item_height * 2;
		overflow: hidden;
		margin: auto;
		&::before {
			display: block;
			content: '';
			position: absolute;
			height: 40px;
			width: 100px;
			background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(96, 96, 96, 0.7) 100%);
			z-index: 99;
			top: 0;
		}
		&::after {
			display: block;
			content: '';
			position: absolute;
			height: 40px;
			width: 100px;
			background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(96, 96, 96, 0.7) 100%);
			z-index: 99;
			bottom: 0;
		}
		.slotitem {
			transform: translateY($item_height / 2);
			width: $item_width;
			height: $item_height;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: white;
			img {
				height: calc(100% - 20px);
			}
		}

		.slotlist {
			position: absolute;
			&.stop {
				top: calc($item_height * -1);
			}
			&.spin {
				top: var(--end-top);
				animation-name: spin_animation;
				animation-duration: var(--spin-animation-time);
				animation-timing-function: ease-out;
			}
		}
	}
</style>
