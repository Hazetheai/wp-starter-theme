<?php
if ($args['type'] == 'burger-closed'): ?>
    <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="2"
        viewBox="0 0 20 2"
        fill="none">
        <path d="M0 1H20"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'burger-open'): ?>
    <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="2"
        viewBox="0 0 20 2"
        fill="none">
        <path d="M0 1H20"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>
<?php elseif ($args['type'] == 'alert'): ?>
    <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <path fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47717 15.5228 0 10 0C4.47717 0 0 4.47717 0 10C0 15.5228 4.47717 20 10 20ZM9 13V15H11V13H9ZM11 8.42859V5H9V8.42859L9.47766 12H10.5223L11 8.42859Z"
            fill=<?= has_key($args, 'fill') ?: "#0F4533" ?> />
    </svg>
<?php elseif ($args['type'] == 'chevron-up-dark'): ?>
    <svg xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="18"
        viewBox="0 0 34 18"
        fill="none">
        <path d="M33 17L17 1L1 17"
            stroke=<?= has_key($args, 'stroke') ?: "#0F4533" ?> />
    </svg>
<?php elseif ($args['type'] == 'chevron-up-light'): ?>
    <svg xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="18"
        viewBox="0 0 34 18"
        fill="none">
        <path d="M33 17L17 1L1 17"
            stroke=<?= has_key($args, 'stroke') ?: "white" ?> />
    </svg>
<?php elseif ($args['type'] == 'chevron-up-light'): ?>
    <svg xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none">
        <path d="M1 49L49 1"
            stroke=<?= has_key($args, 'stroke') ?: "#0F4533" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-large-mobile-right-desktop'): ?>
    <svg width="78"
        height="25"
        viewBox="0 0 78 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.55H77M77 12.55L65.45 24.1M77 12.55L65.45 1"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-large-right-desktop-1512'): ?>
    <svg width="78"
        height="25"
        viewBox="0 0 78 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.45H77M77 12.45L65.45 24M77 12.45L65.45 0.900024"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-large-right-desktop'): ?>
    <svg width="119"
        height="37"
        viewBox="0 0 119 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 18.1H118M118 18.1L100.3 35.8M118 18.1L100.3 0.400024"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-left-desktop'): ?>
    <svg width="41"
        height="14"
        viewBox="0 0 41 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M41 7.09998H1M1 7.09998L7 13.1M1 7.09998L7 1.09998"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-left-mobile'): ?>
    <svg width="41"
        height="12"
        viewBox="0 0 41 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M41 6.09998H1M1 6.09998L7 11.1M1 6.09998L7 1.09998"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-out-desktop'): ?>
    <svg width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00005 14L14 1M14 1H5.51003M14 1V9.49"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-out-mobile'): ?>
    <svg width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00004 11L11 1M11 1H4.46925M11 1V7.53077"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-right-desktop'): ?>
    <svg width="41"
        height="14"
        viewBox="0 0 41 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7H40M40 7L34 13M40 7L34 1"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'extended-right-mobile'): ?>
    <svg width="35"
        height="12"
        viewBox="0 0 35 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.09998H33.3333M33.3333 6.09998L28.3333 11.1M33.3333 6.09998L28.3333 1.09998"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'short-large-right-desktop-1512'): ?>
    <svg width="77"
        height="25"
        viewBox="0 0 77 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.35H30.8M30.8 12.35L19.25 23.9M30.8 12.35L19.25 0.799988"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'short-large-right-desktop'): ?>
    <svg width="118"
        height="37"
        viewBox="0 0 118 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 18.7H47.2M47.2 18.7L29.5 36.4M47.2 18.7L29.5 1"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'short-left-desktop'): ?>
    <svg width="41"
        height="14"
        viewBox="0 0 41 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M17 7.09998H1M1 7.09998L7 13.1M1 7.09998L7 1.09998"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'short-left-mobile'): ?>
    <svg width="41"
        height="12"
        viewBox="0 0 41 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3334 6.09998H1.00004M1.00004 6.09998L6.00004 11.1M1.00004 6.09998L6.00004 1.09998"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'short-out-desktop'): ?>
    <svg width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L10.0001 3.99994M10.0001 3.99994H1.51005M10.0001 3.99994V12.4899"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'short-right-desktop'): ?>
    <svg width="40"
        height="14"
        viewBox="0 0 40 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7H16M16 7L10 13M16 7L10 1"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'short-right-mobile'): ?>
    <svg width="40"
        height="12"
        viewBox="0 0 40 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.09998H13.3333M13.3333 6.09998L8.33333 11.1M13.3333 6.09998L8.33333 1.09998"
            stroke=<?= has_key($args, 'stroke') ?: "#708573" ?> />
    </svg>

<?php elseif ($args['type'] == 'simple-down-desktop'): ?>
    <svg width="50"
        height="26"
        viewBox="0 0 50 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.09998L25 25.1L49 1.09998"
            stroke=<?= has_key($args, 'stroke') ?: "#0F4533" ?> />
    </svg>

<?php elseif ($args['type'] == 'simple-down-mobile'): ?>
    <svg width="34"
        height="18"
        viewBox="0 0 34 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.09998L17 17.1L33 1.09998"
            stroke=<?= has_key($args, 'stroke') ?: "#0F4533" ?> />
    </svg>

<?php elseif ($args['type'] == 'simple-top-desktop'): ?>
    <svg width="50"
        height="26"
        viewBox="0 0 50 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M49 25.1L25 1.09997L1 25.1"
            stroke=<?= has_key($args, 'stroke') ?: "#0F4533" ?> />
    </svg>

<?php elseif ($args['type'] == 'simple-top-mobile   '): ?>

    <svg width="34"
        height="18"
        viewBox="0 0 34 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M33 17.1L17 1.09998L1 17.1"
            stroke=<?= has_key($args, 'stroke') ?: "#0F4533" ?> />
    </svg>

<?php endif; ?>