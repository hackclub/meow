<script lang="ts">
	import './layout.css';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/meow.png" />
</svelte:head>

{@render children()}
