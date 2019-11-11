/**
 * Import wordpress dependencies
 */
const { __ } = wp.i18n;
const { createBlock } = wp.blocks;
const { PluginMoreMenuItem,} = wp.editPost;
const { select, dispatch } = wp.data;
const { registerPlugin } = wp.plugins;

/**
 * Check for invalid blocks and tries to resolve them, if valid, check for
 * invalid innerBlocks
 * @function resolveBlocks
 * @param  {[type]}      id [block clientId]
 * @return {[type]}         [null]
 */
const resolveBlocks = (id) => {
	const blocks = id ?
		select('core/block-editor').getBlock(id).innerBlocks
		: select('core/block-editor').getBlocks();

	if ( Array.isArray(blocks) ) {
		blocks.map( (block) => {
			if (!block.isValid) {
				const newBlock = createBlock( block.name, block.attributes, block.innerblocks);
				dispatch('core/block-editor').replaceBlock( block.clientId, newBlock );
			} else {
				resolveBlocks(block.clientId)
			};
		} );
	};
};

const ResolveBlocks = () => (
	<PluginMoreMenuItem
		icon="forms"
		onClick={ () => resolveBlocks() }
	>
		{ __( 'Attempt All Blocks Recovery', 'gutenberg-blocks-recovery' ) }
	</PluginMoreMenuItem>
);

registerPlugin( 'gutenberg-blocks-recovery', { render: ResolveBlocks } );
