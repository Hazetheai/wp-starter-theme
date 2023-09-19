<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Vite_starter
 */

?>

<footer id="colophon" class="site-footer">


	<div class="site-info module-palette-primary">
		<a class="uppercase link-small" href="<?= get_site_url() . '/impressum' ?>">
			<?php

			_e('Impressum', 'vite-starter');
			?>
		</a>
		<span class="sep"> </span>
		<a class="uppercase link-small" href="<?= get_site_url() . '/datenschutz' ?>">
			<?php

			_e('Datenschutz', 'vite-starter');
			?>
		</a>

	</div><!-- .site-info -->

</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>