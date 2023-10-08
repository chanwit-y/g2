<script lang="ts">
	import { lazyLoad } from '$lib/lazyload';
	import { images } from '$lib/data';

	let isModalOpen = false;
	// let animate = '';
	const handleSelectImage = () => {
		isModalOpen = true;
		// const modal = document.getElementById('my_modal_2');
		// if (modal) {
		// 	modal.showModal();
		// }
		// animate = 'animate-ping';
		// setTimeout(() => {
		// 	animate = '';
		// }, 1000);
	};
</script>

<div class="p-5 grid grid-cols-2 md:grid-cols-3 gap-4">
	{#each images as image}
		<div
			class="flex relative cursor-pointer transition ease-in-out delay-150 hover:scale-105 duration-300 active:animate-zoom-box"
			on:click={handleSelectImage}
		>
			<!-- <div
				class="absolute right-0 w-2/3 h-full opacity-80 rounded-r-lg transition transform delay-150 ease-in-out hover:bg-slate-200 hover:duration-300"
			/> -->
			<img
				class="h-auto max-w-full rounded-lg opacity-0 transition-opacity ease-in-out duration-300"
				use:lazyLoad={image}
				alt=""
			/>
		</div>
	{/each}
</div>

<div class="modal" class:modal-open={isModalOpen}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<!-- 🔵 set false on click -->
			<button class="btn" on:click={() => (isModalOpen = false)}>Yay!</button>
		</div>
	</div>
</div>
