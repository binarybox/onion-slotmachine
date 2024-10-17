<script lang="ts">
	export let list: string[];
	let finish_index: number = 0;
	export let loops: number;

	enum Animation {
		stop = 'stop',
		spin_fast = 'spin_fast',
		spin_slow = 'spin_slow',
		spin_end = 'spin_end'
	}

	$: animated_list = [...list, list[0]];

	$: spin_fast_duration_ms = 500;
	$: spin_slow_duration_ms = 1000;

	let animation: Animation = Animation.stop;

	let animate = false;

	export function trigger(index: number) {
		if (!animate) {
			finish_index = index;
			animate = true;
			animation = Animation.spin_fast;
			setTimeout(
				() => {
					animation = Animation.spin_slow;
					setTimeout(
						() => {
							animation = Animation.spin_end;
							setTimeout(() => {
								animate = false;
							}, index * 400);
						},
						spin_slow_duration_ms * Math.floor(loops / 2)
					);
				},
				spin_fast_duration_ms * Math.ceil(loops / 2)
			);
		}
	}
</script>

<div
	style="--list-items: {list.length}; --spin-end-index: {finish_index}; --spin-fast-time: {spin_fast_duration_ms}ms; --spin-slow-time: {spin_slow_duration_ms}ms"
	class="slotmachine"
>
	<div class={animation + ' slotlist'}>
		{#each animated_list as item}
			<div class="slotitem">
				<img src={item} alt={item} />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	$item_height: 100px;
	$item_width: 100px;
	@keyframes spin_animation {
		0% {
			top: calc((var(--list-items)) * ($item_height * -1));
		}
		100% {
			top: 0px;
		}
	}
	@keyframes spin_animation_end {
		0% {
			top: calc((var(--list-items)) * ($item_height * -1));
		}
		100% {
			top: calc(var(--spin-end-index) * ($item_height * -1));
		}
	}
	.slotmachine {
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
			&.spin_fast {
				animation-name: spin_animation;
				animation-duration: var(--spin-fast-time);
				animation-timing-function: linear;
				animation-iteration-count: infinite;
			}
			&.spin_slow {
				animation-name: spin_animation;
				animation-duration: var(--spin-slow-time);
				animation-timing-function: linear;
				animation-iteration-count: infinite;
			}
			&.spin_end {
				top: calc(var(--spin-end-index) * (-1 * $item_height));
				animation-name: spin_animation_end;
				animation-duration: calc((var(--spin-end-index) * 200ms));
				animation-timing-function: linear;
			}
		}
	}
</style>
