#!/usr/bin/env node

function isSorted(arr) {
    for (var i = 0; i < arr.length -1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function beakerSort(input) {
    var arr = input.slice();
    while (!isSorted(arr)) {
        var a = 0;
        var b = 0;
        while (a == b) {
            a = randInt(0, arr.length);
            b = randInt(0, arr.length);
        }
        var tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
    return arr;
}

// Main
if (process.argv.length > 2) {
    console.log(beakerSort(process.argv.slice(2).map(function (x) { return parseInt(x) })).join(" "));
}
