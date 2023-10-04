<?php

/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Vite_starter
 */

?>

<article id="post-<?php the_ID(); ?>"
	<?php post_class(); ?>>

	<?php bhb_bayern_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		the_content();
		?>


	</div>

	</div><!-- .entry-content -->


</article><!-- #post-<?php the_ID(); ?> -->