#!/usr/bin/env node

function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function beakerSort(input) {
    const array = input.slice();
    
    while (!isSorted(array)) {
        let a = 0;
        let b = 0;
        
        while (a == b) {
            a = randomInt(0, array.length);
            b = randomInt(0, array.length);
        }
        const tmp = array[a];
        
        array[a] = array[b];
        array[b] = tmp;
    }
    return array;
}

// Main
if (process.argv.length > 2) {
    console.log(beakerSort(process.argv.slice(2).map(function (x) { return parseInt(x) })).join(' '));
}
