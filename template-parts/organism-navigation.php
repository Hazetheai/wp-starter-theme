<?php
// $args
wp_nav_menu(
    array(
        'theme_location' => 'menu-1',
        'menu_id'        => 'primary-menu',

    )
);
wp_nav_menu(
    array(
        'theme_location' => 'menu-2',
        'menu_id'        => 'secondary-menu',
    )
);
