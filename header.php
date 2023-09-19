<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Vite_starter
 */

$post_id = get_the_ID(); // Get the current post ID

// Get the post content
$post_content = get_post_field('post_content', $post_id);

// Parse the post content to retrieve the blocks
$blocks = parse_blocks($post_content);

// Loop through the blocks and extract their names
$block_names = array();
foreach ($blocks as $block) {
	$block_names[] = $block['blockName'];
}

$is_text_page = in_array('vitestarter/text-page', $block_names);

$page_palette = $is_text_page ? "module-palette-white" : "module-palette-secondary";

$body_classes = [(is_front_page() ? "module-palette-primary" : $page_palette), $is_text_page ? "text-page" : ""];
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport"
		content="width=device-width, initial-scale=1">
	<link rel="profile"
		href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class($body_classes); ?>>
	<?php wp_body_open(); ?>
	<ul class="transition">
		<li class="anim__list-item-reveal--start"></li>
		<li class="anim__list-item-reveal--start"></li>
		<li class="anim__list-item-reveal--start"></li>
		<li class="anim__list-item-reveal--start"></li>
		<li class="anim__list-item-reveal--start"></li>
	</ul>
	<div id="webgl"></div>
	<div id="page"
		class="site"
		data-barba="wrapper">
		<a class="skip-link screen-reader-text"
			href="#primary">
			<?php esc_html_e('Skip to content', 'bhb-bayern'); ?>
		</a>

		<header id="masthead"
			class="site-header container">
			<div class="site-branding">

				<h1 class="site-title is-theme-primary"><a href="<?php echo esc_url(home_url('/')); ?>"
						rel="home">
						<?= get_template_part(
							'template-parts/atom-logo',
							null,
							array(
								'type' => 'primary'
							)
						); ?>
					</a></h1>

				<p class="site-title is-theme-secondary"><a href="<?php echo esc_url(home_url('/')); ?>"
						rel="home">
						<?= get_template_part(
							'template-parts/atom-logo',
							null,
							array(
								'type' => 'secondary'
							)
						); ?>
					</a></p>
				<p class="site-title is-theme-white"><a href="<?php echo esc_url(home_url('/')); ?>"
						rel="home">
						<?= get_template_part(
							'template-parts/atom-logo',
							null,
							array(
								'type' => 'white'
							)
						); ?>
					</a></p>

			</div><!-- .site-branding -->
			<div class="nav-container">
				<a href="<?= "/kontakt/" ?>"
					class="button header-cta show-for-phone"
					aria-controls="header-cta"
					aria-expanded="false">
					<?php esc_html_e('Angebot Anfragen', 'bhb-bayern'); ?>
				</a>
				<button id="primary-menu-toggle"
					class="menu-toggle"
					aria-controls="primary-menu"
					aria-expanded="false">
					<svg class="open"
						width="1.8em"
						height="1.1em"
						viewBox="0 0 50 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect x="2"
							y="0.398804"
							width="53"
							height="4"
							rx="2"
							transform="rotate(25 2 0.398804)"
							fill="black" />
						<rect y="22.3988"
							width="53"
							height="4"
							rx="2"
							transform="rotate(-25 0 22.3988)"
							fill="black" />
					</svg>
					<svg class="closed"
						width="1.8em"
						height="1.1em"
						viewBox="0 0 49 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect x="0.25"
							width="48"
							height="4"
							rx="2"
							fill="black" />
						<rect x="16.25"
							y="10"
							width="32"
							height="4"
							rx="2"
							fill="black" />
						<rect x="24.25"
							y="20"
							width="24"
							height="4"
							rx="2"
							fill="black" />
					</svg>
				</button>
				<button id="primary-menu-toggle"
					class="menu-toggle menu-toggle--closed"
					aria-controls="primary-menu"
					aria-expanded="false">
					<svg width="1.8em"
						height="1.1em"
						viewBox="0 0 50 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect x="2"
							y="0.398804"
							width="53"
							height="4"
							rx="2"
							transform="rotate(25 2 0.398804)"
							fill="black" />
						<rect y="22.3988"
							width="53"
							height="4"
							rx="2"
							transform="rotate(-25 0 22.3988)"
							fill="black" />
					</svg></button>
				<nav id="site-navigation"
					class="main-navigation module-palette-primary block-theme">
					<?= get_template_part(
						'template-parts/organism-navigation',
						null,
						array(
							'type' => 'default'
						)
					); ?>
				</nav><!-- #site-navigation -->
			</div>
		</header><!-- #masthead -->