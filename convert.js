// 12 inch = 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const myHeight = inchToFeet(68);
console.log(myHeight);


// Advance 
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch. ";
    return result;
}

const myHeight2 = inchToFeet2(68);
console.log(myHeight2);


function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
const resultKilometer = mileToKilometer(5) + "km";
console.log(resultKilometer);


function kiloMeterToMiles(kilo) {
    const mile = kilo * 0.621371;
    return mile;
}

const resultMiles = kiloMeterToMiles(8.0467) + "miles";
console.log(resultMiles);
