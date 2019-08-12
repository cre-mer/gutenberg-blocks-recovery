const { registerPlugin } = wp.plugins;
const { PluginMoreMenuItem,} = wp.editPost;

const ResolveBlocks = () => (
	React.createElement(PluginMoreMenuItem, {
		icon: "forms", 
		onClick:  () => {
			brokenBlocks = $('.has-warning .block-editor-warning__secondary [aria-label="More options"]')
			const bbl = brokenBlocks.length;
			var n = 0;
			while ( n < bbl ) {
				brokenBlocks[n].click();
				setTimeout( () => {
					$('button:contains("Attempt Block Recovery")').click();
				}, 3 );
				n++
			}
		}
	}, 
		"Attempt All Blocks Recovery"
	)
);

registerPlugin( 'gutenberg-resolve-block', { render: ResolveBlocks } );
