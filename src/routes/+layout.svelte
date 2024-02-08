<script lang="ts">
	import '@fontsource/roboto';
	import theme, { toCss } from '@store/theme';
	$: vars = toCss($theme);
</script>

<svelte:head>
	<style>
		html,
		body {
			box-sizing: border-box;
		}
		*,
		*::after,
		*::before {
			box-sizing: inherit;
		}
		body {
			margin: 0;
		}
	</style>
</svelte:head>

<div class="viewport" style={vars}>
	<main>
		<slot />
	</main>
</div>

<style>
	.viewport {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Roboto', sans-serif;
	}
	main {
		font-size: var(--fontsize-body1);
	}
</style>
