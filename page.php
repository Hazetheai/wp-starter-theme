<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Vite_starter
 */

get_header();
global $post;
$post_slug = $post->post_name;
?>

<main id="primary"
	class="site-main"
	data-barba="container"
	data-barba-namespace="<?= $post_slug ?>">

	<?php
	while (have_posts()):
		the_post();

		get_template_part('template-parts/content', 'page');


	endwhile; // End of the loop.
	?>

</main><!-- #main -->
<script type="text/javascript">
	console.log('page.php')
</script>
<?php
// get_sidebar();
get_footer();