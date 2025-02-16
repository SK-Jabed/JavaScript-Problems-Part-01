// Task - 01


// Write a function to convert temperature from Celsius to Fahrenheit.




// Task - 02



// Task - 03




// Task - 04




// Task - 05


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    // code here
    // Check if the number is negative
    if (n < 0) {
        console.log("Number is negative");
    } else {
        // Check if the number is even or odd
        if (n % 2 === 0) {
            console.log("Even");
        } else {
            console.log("Odd");
        }
    }
}

console.log(main(4));
