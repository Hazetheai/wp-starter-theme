# Starter Wordpress Theme

This theme is intended to give an editor experience that resembles the front end. It is built with React using [Gutenberg blocks](https://developer.wordpress.org/block-editor/how-to-guides/). Aside from the more typically react way of structuring blocks, most WordPress standards are still in place. The theme was originally based off of [underscores](https://github.com/Automattic/_s)

## Dev Environment

[Local by Flywheel](https://localwp.com/) was the primary dev environment

[This WP theme](https://github.com/blonestar/wp-theme-vite-tailwind) was added to the project to use [Vite](https://vitejs.dev/) for compilation of assets

[This Project](https://southcoastweb.co.uk/open-source-software/vite-plugin-gutenberg-blocks/) was used to scaffold the blocks.

This will require [Node JS](https://nodejs.org/en) installed in your system. [Vite requires this version](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

## How to Install and Run the Project

Set up your WordPress environment however you like. The steps for using Local By Flywheel are:

1. Download and install Local
2. Drag the .zip of the theme files (bhb-bayern folder) and database on to local to start the installation.
   - If this is unsuccessful:
     1. Create a new site in local. All defaults are fine.
     2. Follow the instructions for [setting up the blocks](https://southcoastweb.co.uk/open-source-software/vite-plugin-gutenberg-blocks/) in your theme or plugin.
     3. From the **development** folder of the blocks directory of the provided theme files (bhb-bayern > blocks > development) copy the **packages** & **shared** folders to the **development** folder of your new blocks folder
     4. Optional - Vite Setup: Use [this repo](https://github.com/blonestar/wp-theme-vite-tailwind) as a guide for installing vite into your project
3. From the theme file root: run `npm install -D`
   1. Navigate to the development folder of your blocks. Run `npm install -D`
4. To run either project, run `npm run dev` from the respective directory.
5. If using the provided database the WP admin credentials are
   1. Username: root
   2. Password: toor

## Development

For static elements, using the blocks ‘save’ function will work fine. For dynamic elements you will need to use dynamic blocks. [Here is simple explainer](https://gutenberghub.com/how-to-create-dynamic-server-side-gutenberg-block/). The [blocks library](https://southcoastweb.co.uk/open-source-software/vite-plugin-gutenberg-blocks/#page_section_3) mentioned above explains how to set it up for this environment.

### Assets

[Contact form 7](https://contactform7.com/) was used for forms.

Front end styles & and JS are located in `assets/`

sass files are imported into the blocks `shared` folder to output styles on the frontend

Design System tokens are included:

- Sass Mixins are used for text styles.
- CSS custom properties are used for colors, spacing & the grid

JS is setup with [Barba.js](https://barba.js.org/), for smooth page transitions, [Lenis](https://lenis.studiofreight.com/) for smooth-scroll, [GSAP](https://gsap.com/) for animations & [Swiper.js](https://swiperjs.com/) for sliders. All logic is found in `index.js`

Theme scripts & installed packages are in the package.json. They are enqueued in the `functions.php` file.

## Production

If using the [wp-theme-vite-tailwind](https://github.com/blonestar/wp-theme-vite-tailwind) be sure to set the IS_VITE_DEVELOPMENT constant to false on the server. Ideally placed in the `wp-config.php` file.

From the theme root, run `npm run bundle`. This will update the theme version, build the blocks, build the theme files and then zip the necessary files for preparation. It should result in `bhb-bayern.zip` in the same folder as the theme folder.
