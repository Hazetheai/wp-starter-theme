<?php

/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Vite_starter
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php vite_starter_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		// WP Query to find a page with the title '404'
		$the_query = new WP_Query(array(
			'title' => '404',
			'post_type' => 'page',
			'posts_per_page' => 1
		));
		// The Loop
		if ($the_query->have_posts()) {
			while ($the_query->have_posts()) {
				$the_query->the_post();
				// Get the content of the page with the slug '404'
				the_content();
			}
		}

		?>
	</div><!-- .entry-content -->


</article><!-- #post-<?php the_ID(); ?> -->