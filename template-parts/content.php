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

	<div class="entry-content ">
		<?= the_content(); ?>

	</div>
	<?php
	?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<script type="text/javascript">
			console.log('template-parts/content.php')
		</script>
		<!-- <?php bhb_bayern_entry_footer(); ?> -->
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->