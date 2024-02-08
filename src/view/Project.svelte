<script lang="ts">
	import Link from './Link.svelte';
	import BackIcon from '~icons/mdi/arrow-back';

	let expanded = false;
	const expand = () => {
		expanded = true;
	};
	const back = (e: Event) => {
		expanded = false;
		e.stopPropagation();
	};
</script>

<Link on:click={expand}>
	<div class="project" class:expanded>
		<div class="image"><slot name="image" /></div>
		<div class="content">
			<h3>
				<slot name="title" />
			</h3>
			<div class="summary">
				<slot name="summary" />
			</div>
			{#if expanded}
				<div class="back">
					<Link on:click={back}>
						<div class="back-inner">
							<BackIcon />
							Back
						</div>
					</Link>
				</div>
			{/if}
		</div>
	</div>
</Link>

<style>
	.project {
		display: flex;
		align-items: stretch;
		gap: 16px;
		height: 100px;
		color: inherit;
		text-decoration: none;
	}

	.image {
		aspect-ratio: 1;
		background-color: rgba(0, 0, 255, 0.2);
	}

	.project.expanded {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background: var(--bg-main);
		flex-direction: column;
		cursor: default;
	}

	.expanded > .image {
		aspect-ratio: unset;
		height: 30%;
	}

	.back {
		position: absolute;
		top: 0;
		left: 0;
	}

	.back-inner {
		position: relative;
		z-index: 0;
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 15px 30px;
	}

	.back-inner::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: var(--bg-main);
		opacity: 0.3;
		z-index: -1;
	}

	h3 {
		margin: 0;
		font-weight: 600;
		font-size: var(--fontsize-h3-xs);
		letter-spacing: var(--letterspacing-h3-xs);
		line-height: var(--lineheight-h3-xs);
	}

	@media only screen and (min-width: 481px) {
		h3 {
			font-size: var(--fontsize-h3-sm);
			letter-spacing: var(--letterspacing-h3-sm);
			line-height: var(--lineheight-h3-sm);
		}
	}

	@media only screen and (min-width: 769px) {
		h3 {
			font-size: var(--fontsize-h3-md);
			letter-spacing: var(--letterspacing-h3-md);
			line-height: var(--lineheight-h3-md);
		}
	}

	@media only screen and (min-width: 1025px) {
		h3 {
			font-size: var(--fontsize-h3-lg);
			letter-spacing: var(--letterspacing-h3-lg);
			line-height: var(--lineheight-h3-lg);
		}
	}

	@media only screen and (min-width: 2561px) {
		h3 {
			font-size: var(--fontsize-h3-xl);
			letter-spacing: var(--letterspacing-h3-xl);
			line-height: var(--lineheight-h3-xl);
		}
	}
</style>
