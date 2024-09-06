/**
 * Array has some duplicate elements 
*/

const subjects = ["Math", "English", "Physics", "Chemistry", "Math", "Biology", "Math", "English"]
const numbers = [5, 10, 15, 20, 5, 15, 30, 5, 40, 10];

function noDuplicate(array) {
    const unique = [];
    for(const item of array) {
        if(unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(subjects);
const uniqueArray2 = noDuplicate(numbers);

console.log(uniqueArray);
console.log(uniqueArray2);