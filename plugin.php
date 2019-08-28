<?php
/**
 * Plugin Name:     Gutenberg Blocks Recovery
 * Description:     A WordPress Plugin To Attmept Blocks Recovery
 * Author:          Jonas Merhej
 * Version:         0.1.0
 */

add_action('enqueue_block_editor_assets', function () {
	wp_enqueue_script('globus-gutenletter', plugins_url('/dist/index-min.js', __FILE__), [], filemtime(plugin_dir_path(__FILE__) . 'dist/index-min.js'), true);
});
