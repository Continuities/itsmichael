<script lang="ts">
	export let gap = '8px';
</script>

<div class="stack" style={`gap:${gap}`}>
	<slot />
</div>

<style>
	.stack {
		display: flex;
		flex-direction: column;
	}
</style>
