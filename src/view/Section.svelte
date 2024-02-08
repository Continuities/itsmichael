<section>
	<h2><slot name="title" /></h2>
	<slot />
</section>

<style>
	h2 {
		margin: 0;
		font-weight: 300;
		font-size: var(--fontsize-h2-xs);
		letter-spacing: var(--letterspacing-h2-xs);
		line-height: var(--lineheight-h2-xs);
	}

	@media only screen and (min-width: 481px) {
		h2 {
			font-size: var(--fontsize-h2-sm);
			letter-spacing: var(--letterspacing-h2-sm);
			line-height: var(--lineheight-h2-sm);
		}
	}

	@media only screen and (min-width: 769px) {
		h2 {
			font-size: var(--fontsize-h2-md);
			letter-spacing: var(--letterspacing-h2-md);
			line-height: var(--lineheight-h2-md);
		}
	}

	@media only screen and (min-width: 1025px) {
		h2 {
			font-size: var(--fontsize-h2-lg);
			letter-spacing: var(--letterspacing-h2-lg);
			line-height: var(--lineheight-h2-lg);
		}
	}

	@media only screen and (min-width: 2561px) {
		h2 {
			font-size: var(--fontsize-h2-xl);
			letter-spacing: var(--letterspacing-h2-xl);
			line-height: var(--lineheight-h2-xl);
		}
	}
</style>
