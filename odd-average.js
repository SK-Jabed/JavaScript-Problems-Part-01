/**
 * Function takes an array as a parameter
*/

// Give me the average of the odd numbers in the array
/**
 * 1. Put odd numbers in an array
*/

function oddAverage(numbers) {
    const odds = [];
    for(const number of numbers) {
        if(number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }       
    }
    // odds is the array that contains only the odd numbers 
    // console.log(odds);
    let sum = 0;
    for(const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [42, 13, 18, 65, 81, 96, 7, 69];
const avg = oddAverage(numbers);
console.log("Average of the odd numbers is: ", avg);