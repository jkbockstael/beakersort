#!/usr/bin/env php

<?php
function isSorted(array $in): bool
{
    if (count($in) < 2) {
        return true;
    }
    for ($i = 0; $i < count($in) - 1; $i++) {
        if ($in[$i] > $in[$i+1]){
            return false;
        }
    }
    return true;
}

function beakerSort(array $arr): array
{
    while (!isSorted($arr)) {
        $a = 0;
        $b = 0;
        while ($a == $b) {
            $a = rand(0, count($arr) - 1);
            $b = rand(0, count($arr) - 1);
        }
        $tmp = $arr[$a];
        $arr[$a] = $arr[$b];
        $arr[$b] = $tmp;
    }
    return $arr;
}

// Main
if ($argc > 1) {
    $values = $argv;
    array_shift($values);
    $values = array_map(intval, $values);
    $sorted = beakerSort($values);
    echo implode(" ", $sorted).PHP_EOL;
}
?>
