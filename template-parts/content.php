<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Vite_starter
 */

?>

<article id="post-<?php the_ID(); ?>"
	<?php post_class(); ?>>


	<?php bhb_bayern_post_thumbnail(); ?>

	<!-- <div class="entry-content ">

	</div> -->
	<?php
	the_content(
		// sprintf(
		// 	wp_kses(
		// 		/* translators: %s: Name of current post. Only visible to screen readers */
		// 		__('Continue reading<span class="screen-reader-text"> "%s"</span>', 'bhb-bayern'),
		// 		array(
		// 			'span' => array(
		// 				'class' => array(),
		// 			),
		// 		)
		// 	),
		// 	wp_kses_post(get_the_title())
		// )
	);

	// wp_link_pages(
	// 	array(
	// 		'before' => '<div class="page-links">' . esc_html__('Pages:', 'bhb-bayern'),
	// 		'after'  => '</div>',
	// 	)
	// );
	?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<script type="text/javascript">
			console.log('template-parts/content.php')
		</script>
		<!-- <?php bhb_bayern_entry_footer(); ?> -->
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->