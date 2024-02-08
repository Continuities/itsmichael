<script lang="ts">
	import Stack from './Stack.svelte';

	export let name: string;
</script>

<section>
	<h1>{name}</h1>
	<div class="summary">
		<slot name="summary" />
	</div>
	<Stack>
		<slot name="socials" />
	</Stack>
</section>

<style>
	h1 {
		margin: 0;
		font-weight: 300;
		font-size: var(--fontsize-h1-xs);
		letter-spacing: var(--letterspacing-h1-xs);
		line-height: var(--lineheight-h1-xs);
	}

	.summary {
		font-size: var(--fontsize-subtitle-xs);
		margin: 8px 0 16px;
	}

	@media only screen and (min-width: 481px) {
		h1 {
			font-size: var(--fontsize-h1-sm);
			letter-spacing: var(--letterspacing-h1-sm);
			line-height: var(--lineheight-h1-sm);
		}
		.summary {
			font-size: var(--fontsize-subtitle-sm);
		}
	}

	@media only screen and (min-width: 769px) {
		h1 {
			font-size: var(--fontsize-h1-md);
			letter-spacing: var(--letterspacing-h1-md);
			line-height: var(--lineheight-h1-md);
		}
		.summary {
			font-size: var(--fontsize-subtitle-md);
		}
	}

	@media only screen and (min-width: 1025px) {
		h1 {
			font-size: var(--fontsize-h1-lg);
			letter-spacing: var(--letterspacing-h1-lg);
			line-height: var(--lineheight-h1-lg);
		}
		.summary {
			font-size: var(--fontsize-subtitle-lg);
		}
	}

	@media only screen and (min-width: 2561px) {
		h1 {
			font-size: var(--fontsize-h1-xl);
			letter-spacing: var(--letterspacing-h1-xl);
			line-height: var(--lineheight-h1-xl);
		}
		.summary {
			font-size: var(--fontsize-subtitle-xl);
		}
	}
</style>
