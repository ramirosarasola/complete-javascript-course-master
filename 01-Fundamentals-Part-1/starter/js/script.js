let js = 'amazing';
// console.log(34 + 323 + 242);

const firstName = 'Ramiro';
const job = 'Tech Developer';
const birthYear = '1999';
let currentYear = '2022';

let ramiro = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

console.log(ramiro);

// Template Literals!

const ramiroNew = `I'm ${firstName}, a ${currentYear-birthYear} years old ${job}! `;

console.log("by template literals: " + ramiroNew);