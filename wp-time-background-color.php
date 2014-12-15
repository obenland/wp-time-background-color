<?php
/**
 * Plugin Name: WP Time Background Color
 * Author: Konstantin Obenland
 * Description: Colors the background of your site based on the time of day.
 * Version: 0.9
 * License: GPLv2
 */

function wptbc_scripts() {
	wp_enqueue_script( 'wptbc-time-background', plugins_url( 'js/time-background.js', __FILE__ ), array(), '0.9' );
}
add_action( 'wp_enqueue_scripts', 'wptbc_scripts' );
