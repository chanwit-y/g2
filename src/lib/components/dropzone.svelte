<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	let items: any[] = [];
    
	function handleDrop(event: any) {
	    const fileList = event.dataTransfer.files;
	    if (fileList && fileList.length > 0) {
		for (let i = 0; i < fileList.length; i++) {
		    items.push(fileList.item(i));
		}
	    }
	}
    </script>
    
    <div 
	use:dndzone={{ items }} 
	class="dropzone"
	on:drop={handleDrop}
    >
	Drop files here
    </div>
    
    <style>
	.dropzone {
	    width: 300px;
	    height: 200px;
	    border: 2px dashed gray;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    cursor: pointer;
	}
    </style>