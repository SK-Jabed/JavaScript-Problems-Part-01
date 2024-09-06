/**
 * Simple Logic: Year will be a leap year if the year is divisible by 4
*/

function isLeapYear(year) {
    if(year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isLeap = isLeapYear(2024);
console.log(isLeap);


/**
 * 1. Those year that is not divisible by 100, if the year is divisible by 4: Then it will be a leap year
 * 2. If the year is divisible by 100 and also divisible by 400: Then it will be a leap year 
 * 3. Else it is not a leap year
*/

function isLeapYear2(year) {
    if(year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isLeap2 = isLeapYear2(2024);
const isLeap3 = isLeapYear2(2052);
const isLeap4 = isLeapYear2(2050);
const isLeap5 = isLeapYear2(1971);
console.log(isLeap2, isLeap3, isLeap4, isLeap5);