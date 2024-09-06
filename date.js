const today = new Date();
const date = new Date("2062-09-22");

console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2090, 0, 22);
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString("en-GB"));

