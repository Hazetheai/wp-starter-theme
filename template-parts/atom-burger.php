<?php
if ($args['type'] == 'hover') : ?>
    <svg width="1.8em" height="1.1em" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.25" width="48" height="4" rx="2" fill="black" />
        <rect x="0.25" y="10" width="48" height="4" rx="2" fill="black" />
        <rect x="0.25" y="20" width="48" height="4" rx="2" fill="black" />
    </svg>

<?php elseif ($args['type'] == 'open') : ?>
    <svg width="1.8em" height="1.1em" viewBox="0 0 50 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="0.398804" width="53" height="4" rx="2" transform="rotate(25 2 0.398804)" fill="black" />
        <rect y="22.3988" width="53" height="4" rx="2" transform="rotate(-25 0 22.3988)" fill="black" />
    </svg>

<?php else :  ?>
    <svg width="1.8em" height="1.1em" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.25" width="48" height="4" rx="2" fill="black" />
        <rect x="16.25" y="10" width="32" height="4" rx="2" fill="black" />
        <rect x="24.25" y="20" width="24" height="4" rx="2" fill="black" />
    </svg>
<?php endif; ?>