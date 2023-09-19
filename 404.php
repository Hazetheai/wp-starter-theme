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

?>

<main id="primary" class="site-main" data-barba="container" data-barba-namespace="404">

	<?php
	get_template_part('template-parts/content', 'none');
	?>

</main><!-- #main -->
<script type="text/javascript">
	console.log('page.php')
</script>
<?php
// get_sidebar();
get_footer();
