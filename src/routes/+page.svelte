<script lang="ts">
	import { lazyLoad } from '$lib/lazyload';
	import { images } from '$lib/data';

	// let animate = '';
	// const handleSelectImage = () => {
	// 	animate = 'animate-ping';
	// 	setTimeout(() => {
	// 		animate = '';
	// 	}, 1000);
	// };
</script>

<div class="p-5 grid grid-cols-2 md:grid-cols-3 gap-4">
	{#each images as image}
		<div class="flex relative cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 active:animate-waving-hand" >
			<!-- <div
				class="absolute right-0 w-2/3 h-full opacity-80 rounded-r-lg transition transform delay-150 ease-in-out hover:bg-slate-200 hover:duration-300"
			/> -->
			<img
				class="h-auto max-w-full rounded-lg opacity-0 transition-opacity ease-in-out duration-300 "
				use:lazyLoad={image}
				alt=""
			/>
		</div>
	{/each}
</div>
