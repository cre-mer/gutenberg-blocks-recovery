/**
 * Import wordpress dependencies
 */
const { __ } = wp.i18n;
const { createBlock } = wp.blocks;
const { PluginMoreMenuItem,} = wp.editPost;
const { select, dispatch } = wp.data;
const { registerPlugin } = wp.plugins;

const ResolveBlocks = () => (
	<PluginMoreMenuItem
		icon="forms"
		onClick={ () => {
			var blocks = select('core/block-editor').getBlocks();
			blocks.map( ( block ) => {
				if (!block.isValid) {
					var newBlock = createBlock( block.name, block.attributes, block.innerblocks);
					dispatch('core/block-editor').replaceBlock( block.clientId, newBlock );
	   			}
			} );
		} }
	>
		{ __( 'Attempt All Blocks Recovery', 'gutenberg-blocks-recovery' ) }
	</PluginMoreMenuItem>
);

registerPlugin( 'gutenberg-blocks-recovery', { render: ResolveBlocks } );
