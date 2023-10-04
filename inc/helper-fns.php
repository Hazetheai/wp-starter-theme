<?php
function extract_first_two_sentences($text)
{
    $sentences = preg_split('/(?<=[.?!])\s+/', $text, -1, PREG_SPLIT_NO_EMPTY);

    if (count($sentences) >= 2) {
        $firstTwoSentences = $sentences[0] . ' ' . $sentences[1];
        return $firstTwoSentences;
    } else {
        // If there are fewer than two sentences, return the original text
        return $text;
    }
}

//   // Example usage
//   $text = "This is the first sentence. This is the second sentence. This is the third sentence.";
//   $firstTwoSentences = extract_first_two_sentences($text);
//   echo $firstTwoSentences;


function unslugify($slug)
{
    $words = explode('-', $slug);
    $unslugified = '';

    foreach ($words as $word) {
        $unslugified .= ucfirst($word) . ' ';
    }

    return trim($unslugified);
}


/**
 * Checks if a key exists in an array, and returns the value if it does.
 */

function has_key($array, $key)
{

    if (isset($array[$key])) {
        return $array[$key];
    }
    return false;
}

/**
 * Checks if a key exists in a nested array, and returns the value if it does.
 */

function get_val_by_key($array, ...$keys)
{
    if (!is_array($array)) {
        return false;
    }
    $value = $array;

    foreach ($keys as $key) {
        if (is_array($value) && array_key_exists($key, $value)) {
            $value = $value[$key];
        } else {
            return false;
        }
    }

    return $value;
}



global $user_agent;
$user_agent = $_SERVER['HTTP_USER_AGENT'];
function getOS()
{
    global $user_agent;
    $os_platform = "Unknown OS Platform";
    $os_array = array(
        '/windows nt 10/i' => 'Windows 10',
        '/windows nt 6.3/i' => 'Windows 8.1',
        '/windows nt 6.2/i' => 'Windows 8',
        '/windows nt 6.1/i' => 'Windows 7',
        '/windows nt 6.0/i' => 'Windows Vista',
        '/windows nt 5.2/i' => 'Windows Server 2003/XP x64',
        '/windows nt 5.1/i' => 'Windows XP',
        '/windows xp/i' => 'Windows XP',
        '/windows nt 5.0/i' => 'Windows 2000',
        '/windows me/i' => 'Windows ME',
        '/win98/i' => 'Windows 98',
        '/win95/i' => 'Windows 95',
        '/win16/i' => 'Windows 3.11',
        '/macintosh|mac os x/i' => 'Mac OS X',
        '/mac_powerpc/i' => 'Mac OS 9',
        '/linux/i' => 'Linux',
        '/ubuntu/i' => 'Ubuntu',
        '/iphone/i' => 'iPhone',
        '/ipod/i' => 'iPod',
        '/ipad/i' => 'iPad',
        '/android/i' => 'Android',
        '/blackberry/i' => 'BlackBerry',
        '/webos/i' => 'Mobile'
    );

    foreach ($os_array as $regex => $value) {
        if (preg_match($regex, $user_agent)) {
            $os_platform = $value;
        }
    }
    return $os_platform;
}
function getBrowser()
{
    global $user_agent;

    $browser = "Unknown Browser";
    $browser_array = array(
        '/msie/i' => 'Internet Explorer',
        '/firefox/i' => 'Firefox',
        '/safari/i' => 'Safari',
        '/chrome/i' => 'Chrome',
        '/opera/i' => 'Opera',
        '/netscape/i' => 'Netscape',
        '/maxthon/i' => 'Maxthon',
        '/konqueror/i' => 'Konqueror',
        '/mobile/i' => 'Handheld Browser'
    );
    foreach ($browser_array as $regex => $value) {
        if (preg_match($regex, $user_agent)) {
            $browser = $value;
        }
    }
    return $browser;
}


// $user_os = getOS();
// $user_browser = getBrowser();
