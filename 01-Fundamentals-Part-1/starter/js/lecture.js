const myCountry = 'Argentina';
const myContinent = 'America del Sur';
let myPopulation = 45;

console.log(myCountry, myContinent, myPopulation);

let isIsland = false;
let myLanguage = "english";

console.log(typeof (isIsland), typeof (myPopulation), typeof (language), typeof (myCountry));

//Basic Operators

const halfPopulation = myPopulation / 2;

//RTA 1: 
console.log("There will be " + halfPopulation + " in each side");

myPopulation++;
console.log(myPopulation++);

const finlandPopulation = 6;

let finlandBiggerPopulation = finlandPopulation > myPopulation;

console.log(finlandBiggerPopulation);

const avgPopulation = 33;

console.log(myPopulation > avgPopulation);

let myDescription = myCountry + " is in " + myContinent + ", " + "and its " + myPopulation + " mmillion people speak " + myLanguage;

console.log(myDescription);

//Template Literals

let myDescriptionLiteral = `${myCountry} is in ${myContinent}, and it's ${myPopulation} million people speaks ${myLanguage}`

console.log(myDescriptionLiteral);

//Taking decision if/else statments

if (myPopulation < avgPopulation) {
    console.log(`${myCountry}'s population is ${avgPopulation - myPopulation} million below average`)
} else {
    console.log(`${myCountry}'s population is ${myPopulation - avgPopulation} million over average`)
};

// Type Conversion and Coercion

console.log('9' - '5'); //=> 4
console.log('19' - '13' + '17'); //=> 617     
console.log('19' - '13' + 17); //=> 23
console.log('123' < 57); //=> FALSE
console.log(5 + 6 + '4' + 9 - 4 - 2); //=> 1143


// Equality Operators: == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border');
// } else if (numNeighbours > 1) {
//     console.log(`more than 1 border`);
// } else {
//     console.log(`No borders`);
// };

//Logical Operators

if (myPopulation < 50 && myLanguage === 'english' && !isIsland) {
    console.log(`You should live in Portugal`);
} else {
    console.log(`Portugal does not meet your criteria :(`)
}

//LECTURE: The switch Statement

let day = 'april';

if (day === 'monday') {
    console.log('Plan the course structure');
    console.log('Go to the codign meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos!');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day :( ');
}


//LECTURE: The switch Statement

const language1 = prompt();

switch (language1) {
    case 'chinese':
    case 'mandarin':
        alert('MOST number of native speakers');
        break;
    case 'spanish':
        alert('2nd place in number of native speakers');
        break;
    case 'english':
        alert('3rd place');
        break;
    case 'hindi':
        alert('Number 4');
        break;
    case 'arabic':
        alert('5th most spoken language');
        break;
    default:
        alert('Great language too :D');
}

//LECTURE: Ternary Operator

//As it is an expression we can use it in a template literal. Its very usefull when we need to make a simple decision. 

let ternaryPopulation = myPopulation > 33 ? console.log(`${myCountry} population is obove average`) : console.log(`${myCountry} population is below average`);