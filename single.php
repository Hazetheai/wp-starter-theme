<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Vite_starter
 */

get_header();
?>

<main id="primary" class="site-main" data-barba="container" data-barba-namespace="single">

	<?php
	while (have_posts()) :
		the_post();

		get_template_part('template-parts/content', get_post_type());

	endwhile; // End of the loop.
	?>

</main><!-- #main -->
<script type="text/javascript">
	console.log('single.php')
</script>
<?php
// get_sidebar();
get_footer();
