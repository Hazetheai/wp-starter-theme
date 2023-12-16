<?php
$href = has_key($args, 'href') ?: null;
$text = has_key($args, 'text') ?: 'Mehr erfahren';
$rel = has_key($args, 'rel') ?: '';
$target = has_key($args, 'type') == "external" ? '_blank' : '_self';
$style = has_key($args, 'style') ?: 'primary-button';
?>

<a href="<?= $href ?>"
    class="link <?= $style ?>"
    rel="<?= $rel ?>"
    target="<?= $target ?>">
    <?= $text ?>
</a>