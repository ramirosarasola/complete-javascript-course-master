'use strict';

// //functions

// function logger( /*If we do not assign any parameter, the arguments will not work*/ ) {
//     //the function body
//     console.log('My nameOne is Ramiro');
// }

// // Now we can calling / runnning / invoking the function;

// logger( /*Arguments here have no effect, because in the function there are no parameters*/ );
// logger();
// logger();

// //Functions can also get input data

// function fruitProcessor(apples, oranges) {
//     //body function
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples anda ${oranges} oranges.`
//     return juice;
// }

// fruitProcessor(5, 0); // 5 and 0 are the parameters than before we just declared. They work as empty input values, so then we can add the information/ data we need. 


// const appleJuice = fruitProcessor(5, 0); //---> Now we save the value of our fruitProcessor function into the variable 'appleJuice'; 
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(5, 4);
// console.log(appleOrangeJuice);


// //---Sumary functions => 
// //---   functions allow us to write more manteinable code.
// //---   we can create reusable chunks of code instead of having to write the same code over and over again... we shoudl write dry code... do not repeat our selves ... 


//Lecture Functions:

// function describeCountry(country, population, capitalCity) {
//     const countryDescription = `${country} has ${population} million people and its capital is ${capitalCity}.`
//     console.log(countryDescription);
//     return countryDescription;
// }

// //Una vez creada nuestra function ya podemos reutilizarla asignandole diferentes argumentos. De esta manera, podemos reutilizar codigo de una manera mas prolija.

// const argentina = describeCountry('Argentina', 45, 'Buenos Aires');
// const italia = describeCountry('Italia', 27, 'Roma');
// const espana = describeCountry('Espana', 15, 'Madrid');
// const brasil = describeCountry('Brasil', 58, 'Rio de Janiero');


// //-------------------------------//
// // LECTURE: Function Declarations vs. Expressions

// //Function declaration
// // This fucntion can be called/ invoked before being initializated. For example:

// // const sofia = calcAge(2000); //=> This should work!

// function calcAgeDeclaration(birthYear) {
//     return 2022 - birthYear;
// }
// const sofia = calcAgeDeclaration(2000); // => Can be called before intialization. Better not!

// //Function expression => Produces values!
// /*This is an anonymous function*/
// const calcAgeExpression = function (birthYear) {
//     return 2022 - birthYear;
// }
// const ramiro = calcAgeExpression(1999);


//Function Declaration Lecture Exercise

// function percetageOfWorldDecalaration(population, country) {
//     const avgPopulation = `${country}'s population is ${(100 * population) / 7900}% about the world`;
//     return avgPopulation;
// }

// const china = percetageOfWorldDecalaration(1441, 'China');
// console.log(china);

// const argentina = percetageOfWorldDecalaration(45, "Argentina");
// console.log(argentina);

// const brasil = percetageOfWorldDecalaration(62, "Brasil");
// console.log(brasil);

//Function Expression Lecture Exercise

// const calcAvgPopulation = function (population, country) {
//     const avgPopulation = `${country}'s population is ${(100*population)/7900}% about the world`;
//     return avgPopulation;
// }

// const argentina = calcAvgPopulation(45, "Argentina");
// console.log(argentina);

// const china = calcAvgPopulation(1441, 'China');
// console.log(china);

// const brasil = calcAvgPopulation(64, 'Brasil');
// console.log(brasil);


//   ALL ABOVE IS COMENTED

//-------------------------------//

//Lecture: Arrow Function.

//Function expression => Produces values!
/*This is an anonymous function*/
// const calcAgeAnonymous = function (birthYear) {
//     return 2022 - birthYear;
// }
// const martin = calcAgeAnonymous(1999);

//Arow Function

// const calcAgeArrow = birthYear => 2022 - birthYear; /*the 'birthYear' is working as a parameter*/ /*return implicit, we do not need to included it => only if its one line function*/
// const santiago = calcAgeArrow('1967');

// //Arrow Function with a return needed.

// const yearToRetirement = (birthYear, firstName) => {
//     const currentAge = 2022 - birthYear;
//     return `${firstName} retires in ${65 - currentAge} years.`
// }
// const maria = yearToRetirement(1968, "Maria");
// const carmela = yearToRetirement(2004, "Carmela");

// // As we need more than one value, we need a return.

// console.log(`You have ${sofia} years old.`, `You have ${ramiro} years old.`, `You have ${santiago} years old.`);

// console.log(maria, carmela);


//Arrow function Lecture Exercise

// const percetageOfWorldArrow = (population, country) => `${country}'s population is ${(100 * population) / 7900}% about the world`;

// const argentina = percetageOfWorldArrow(45, "Argentina");
// console.log(argentina);

// const china = percetageOfWorldArrow(1441, 'China');
// console.log(china);

//-------------------------------//

//Lecture: Functions calling other functions.

// function cutFruitPieces(fruit) {
//     return fruit * 2;
// }

// function fruitProcessor(apples, oranges) {
//     //body function
//     //we called another function

//     const applesPieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applesPieces} apples pieces and ${orangesPieces} oranges pieces.`
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// Functions calling other functions Lecture Excercise

// const avgPopulation = population => ((population * 100) / 7900);

// const describePopulation = function (country, population) {
//     const populationDescribed = `${country} has ${population} million peolpe, which is about ${avgPopulation(population)}% of the world.`;
//     return populationDescribed;
// };

// const argentina = describePopulation('Argentina', 45);
// const china = describePopulation('China', 1441);
// const brasil = describePopulation('Brasil', 142);

// console.log(argentina, china, brasil);

//-------------------------------//

//Lecture: Reviewng Functions.

// This is a declaration function => Functions that can be called before being declared.
// function sayHello(nameOne) {
//     console.log('Hello ' + nameOne + '!');
// }
// const bienvenida = sayHello('Ramiro');

// // This is a expression function => Essentially a function value stored in a variable.
// const sayGoodBye = function goodBye(nameTwo) {
//     console.log('Good Bye ' + nameTwo + '!');
// }
// const byeBye = sayGoodBye('Ramiro');

// //This is an Arrow Function => Great for a quick one-line function. 
// const calcBirthYear = age => 2022 - age;
// const ramiroBirthYear = calcBirthYear(23);
// console.log('Ramiro was born in ' + ramiroBirthYear);

//This three types of functions are correct. They are written in diferents way, but they all work in a similiar way. Receive INPUT data, TRANSFORM data, and then OUTPUT data.

//  ANATOMY OF A FUNCTION 

/* 
-Function name: identifier name to the function;
-Parameters: placeholder to recieve input value. Like local variables of a function;
-Function body: block of code that we want to reuse. Processes the function's data;
-Return: statement yo output a value from the function and terminate execution;
*/

//-------------------------------//

//CODING CHALLENGE #1
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const dolphinsScore = calcAverage(414, 123, 171);
// const koalasScore = calcAverage(65, 54, 49);

// console.log(dolphinsScore, koalasScore);



// function checkWinner(avgDolphins, avgKoalas) {

//     if ((avgDolphins / 2) >= avgKoalas) {
//         return console.log(`Dolphins wins (${dolphinsScore+' vs '+ koalasScore}).`);
//     } else if (avgDolphins * 2 <= avgKoalas) {
//         return console.log(`Koalas wins (${koalasScore+' vs ' + dolphinsScore}).`);
//     } else {
//         return console.log('Nobody wins');
//     }
// }

// checkWinner(dolphinsScore, koalasScore);

//-------------------------------//

//Lecture: Intro to Arrays.

// const yoBirthYear = 1999

// const calcAge = birthYear => 2022 - birthYear;

// // const calcAge = function (birthYear) {
// //     const age = 2022 - birthYear;
// //     return age;
// // }

// // function calcAge(birthYear) {
// //     const age = 2022 - birthYear;
// //     return age;
// // }

// const yo = ['Ramiro', calcAge(1999)];

// const family = ['Santiago', 'Maria', yo, 'Sofia', 'Carmela', 'Toy', 'Roberto'];
// console.log(family);

// console.log(family[(family.length - 1) / 2]);

// The arrays save information values as variables all in only one array. The array information must be expressions => code that produce values.

// Lecture: Array Metohds

// Add Array Methods
// array.push() => Add a element at the end of our array
// array.unshift() => Add a element at the beggining of our array

// Remove Array Methods
// array.pop() => Remove a element at the end of our array;
// array.shift() => Remove a element at the beggining of our array

// Position Array Methods
// array.indexOf('value/element') => this method return the index position of our element in our array;
// If we look for a value/element which it does not exist, te result will be '-1';

// array.includes('value/element') => this method return a boolean. If the value/element exists in our array will return TRUE, if it doesnt existe it will return FALSE. We use this method to check if our value/element exists or not in our array.. 
// This method is works with in a strict way => it recognize the type value of the element. 
// Ex:(23 != '23');

// As this method return booleans, with should include it in conditions.

// let member = prompt('Check if its part of your family or not');

// if (family.includes(member)) {
//     console.log(`${member} is part of your family`);
// } else {
//     console.log(`${member} is NOT part of your family`);
// }

// Lecture Arrays: Exercise

// const population = [45, 13, 1441, 65];
// const percentages = []
// // console.log(population.length === 4 ? true : false);

// function percentageOfWorld(i) {
//     for (let i = 0; i < 4; i++) {
//         percentages.push((population[i] * 100) / 7900);
//         // console.log(population[0]);
//     }
// }

// percentageOfWorld(population.length - 1);
// // console.log(percentages);

// const countries = ['argentina', 'chile', 'brasil', 'paraguay'];
// const neighbours = [];

// neighbours.push(countries[0], countries[1], countries[2]);
// neighbours.push('utopia'); //array.push => Add the element to the end of the array;
// neighbours.pop(neighbours.length - 1); //array.pop => Delete the last element of the array;


// if (!neighbours.includes('germany')) {
//     console.log('Probably not a central European country :D');
// };

// console.log(neighbours.indexOf('chile'));
// neighbours[1] = 'bolivia';

// console.log(countries);
// console.log(neighbours);

//-------------------------------//

//CODING CHALLENGE #2


// //First Way
// const bills = [125, 555, 44];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// }
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
// console.log(bills)
// console.log(total);


// //Second Way => Arrays + Loops :) 😎
// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * 0.15;
//         tips.push(tip);
//         return tip;
//     } else {
//         const tip = bill * 0.2;
//         tips.push(tip);
//         return tip;
//     }
// }

// for (let i = 0; i < bills.length; i++) {
//     calcTip(bills[i]);
//     total.push((bills[i] + tips[i]));
// };

// console.log(tips, bills, total);

//-------------------------------//

//Lecture: Intro to Objects.

//Excercise

// const myCountry = {
//     country: 'Argentina',
//     capital: 'Buenos Aires',
//     language: 'spanish',
//     population: 45,

//     describe: function () {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, 3 neighbours countries and a capital called ${this.capital}`)
//     },

//     checkIsland: function () {
//         this.isIsland = neighbours.length === 0 ? "It's an island" : "It's not an island";
//         return this.isIsland;
//     },
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isIsland);

// console.log(neighbours);

// /*
// Using the object from the previous assignment, log a string like this to the 
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
// and a capital called Helsinki.'
// */

// myCountry.population = myCountry.population + 2;
// myCountry['population'] = myCountry['population'] - 2;

// // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 3 neighbours countries and a capital called ${myCountry.capital}`);

//In an Array....

// const ramiroArray = [
//     'Ramiro',
//     'Sarasola',
//     2022 - 1999,
//     'Developer',
//     ['Manuel', 'Jeronimo', 'Nicolas'],
// ]

// //All this elements can be only been identified by their index [0,1,2,3,4];
// //We use arrays for an order data.

// //In an Object...

// const ramiroObject = {
//     firstName: 'Ramiro',
//     lastName: 'Sarasola',
//     age: 2022 - 1999,
//     job: 'Developer',
//     friends: ['Manuel', 'Jeronimo', 'Nicolas'],
// }

//Now we can determined our values/elements as properties with their values.
//Now we dont have any order of our information.
//We use objects for unorder data.

//To obtain data from an object, we have to ways:

//Dot vs Bracket Notation:

//Dot => 'obect'.'property';  for example: =>
//Bracket notation => 'object'['any expression which identifies any property']; for example: =>

// console.log(ramiroObject.firstName); //=> this logged 'Ramiro'; DOT way;
// console.log(ramiroObject['firstName']); //=> this logged 'Ramiro'; Bracket Notation way;

// const interestedIn = prompt('What do you want to know about me? You can choose between: firstName, lastName, age, friends, job.');

// // console.log(ramiroObject.interestedIn) // this does not work, becuase interestedIn is not a propoerty of the object.

// // console.log(ramiroObject[interestedIn]) // As this interesedIn is an expression, it works! 

// (ramiroObject[interestedIn]) ? console.log(ramiroObject[interestedIn]): console.log('Wrong Request!');


//How to add properties:

// ramiroObject.location = "Argentina";
// ramiroObject['instagram'] = 'rama.sarasola';

// //Challenge
// // "Jonas has 3 friends, and his best friend is called Manuel";

// console.log(`${ramiroObject.firstName} has ${ramiroObject.friends.length} friends, and his best friend is called ${ramiroObject.friends[0]}`);

//-------------------------------//

//Lecture: Objects Methods.

//In objects we can save any type of vales/elements : booleans, strings, numbers, expressions, arrays, objects... As functions are also values, we can save a property with a function as a value;

// const ramiroObject = {
//     firstName: 'Ramiro',
//     lastName: 'Sarasola',
//     birthYear: 1999,
//     job: 'Developer',
//     friends: ['Manuel', 'Jeronimo', 'Nicolas'],
//     hasDriverLicenese: true,

// calcAge: function (birthYear) {
//     return 2022 - birthYear;
// }

// console: console.log((this)), //This show me the whole window properties

// calcAge: function () {
//     // console.log(ramiroObject.birthYear);
//     // its === to 🔽
//     // console.log(this.birthYear);
//     // console.log(this)
//     return 2022 - this.birthYear; //We can use 'this.' as a method to reference our object so then we can access the object properties. => we change 'ramiroObjecto.job' to 'this.job' => Because 'this' refers to our object!!! "This" represents the "object name", so we can change the name of our object and have any problem in the future.
// }

// calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//     // Its the equals to ===> " return ramiroObject.age; " because "this" represents the object name.
// }

//Challenge

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicenese ? 'a' : 'no'} driver's license`;
//     },
// };

// // console.log(ramiroObject.calcAge(2500 /*no effect => no parameter in our function*/ ));
// // console.log(ramiroObject.age);


// // ramiroObject.calcAge();
// console.log(ramiroObject.getSummary());


//-------------------------------//

// //CODING CHALLENGE #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }

// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// function loggedHigherBMI() {
//     mark.BMI > john.BMI ? console.log(`${mark.fullName}'s BMI ( ${mark.BMI} ) is higher than ${john.fullName}'s (${john.BMI})!`) : console.log(`${john.fullName}'s BMI (${john.BMI}) is lower than ${mark.fullName}'s (${mark.BMI})!`);
// }

// loggedHigherBMI();

//-------------------------------//

//Lecture: Loops

//Lecture Exercises Loops

// for (let i = 1; i < 51; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

// the FOR loops keeps running while condition is TRUE => It finish when the condition is FLASE;

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`${rep} pull ups! 💪`);
// };

//-------------------------------//

//Lecture: Looping Arrays, Breaking and Continuing

//Lecture Exercise

// const population = [45, 13, 1441, 65];
// const percentages = []
// for (let i = 0; i < population.length; i++) {
//     percentages.push(percentageOfWorld(population[i]));
// }
// // // console.log(population.length === 4 ? true : false);

// function percentageOfWorld(population) {
//     return (population * 100) / 7900;
// }

// percentageOfWorld(population.length - 1);
// console.log(percentages);

// const countries = ['argentina', 'chile', 'brasil', 'paraguay'];
// const neighbours = [];

// // // neighbours.push(countries[0], countries[1], countries[2]);
// // // neighbours.push('utopia'); //array.push => Add the element to the end of the array;
// // // neighbours.pop(neighbours.length - 1); //array.pop => Delete the last element of the array;


// const percentages2 = [];

// for (let i = 0; i < population.length; i++) {
//     percentages2.push(percentageOfWorld(population[i]));
// }
// console.log(percentages2);

// // percentages[2] = 5;

// for (let i = 0; i < percentages2.length; i++) {
//     if (percentages[i] !== percentages2[i]) continue;
//     console.log(percentages, percentages2);
// }


// const ramiroArray = [
//     'Ramiro',
//     'Sarasola',
//     2022 - 1999,
//     'Developer',
//     ['Manuel', 'Jeronimo', 'Nicolas'],
//     true,
//     'Argentina',
// ]
// const ramiroTypeValues = [];

// for (let i = 0; i < ramiroArray.length; i++) {
//     console.log(ramiroArray[i]);

//     //filling an array by 2 differents ways
//     // ramiroTypeValues[i] = typeof ramiroArray[i];
//     ramiroTypeValues.push(typeof ramiroArray[i]);
// }

// console.log(ramiroTypeValues);

// //Practicing input data from an array to another array with for loops;

// const years = [1967, 1968, 1999, 2000, 2004];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// };

// console.log(ages);

// //continue and break

// for (let i = 0; i < ramiroArray.length; i++) {
//     if (typeof ramiroArray[i] !== 'string') continue;
//     console.log(ramiroArray[i]);
// };


// for (let i = 0; i < ramiroArray.length; i++) {
//     if (typeof ramiroArray[i] !== "string") {
//         break;
//     };
//     console.log(ramiroArray[i]);
// };

//continue => Only when the IF statament is true the loop will continue; saltea.
//break => Only when the IF statement is true the loop will break; corta el loop.

//-------------------------------//

//Lecture: Looping Backwards and loops in loops
//Lecture Excercise

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia'],
// ];

// for (let neighbours = 0; neighbours < listOfNeighbours.length; neighbours++) {
//     // console.log(listOfNeighbours.length);

//     for (let neighboursInside = 0; neighboursInside < listOfNeighbours[neighbours].length; neighboursInside++) {
//         console.log(`Country: ${listOfNeighbours[neighbours][neighboursInside]}`);
//     };
// };

// console.log(listOfNeighbours[0].length)


// const ramiroArray = [
//     'Ramiro',
//     'Sarasola',
//     2022 - 1999,
//     'Developer',
//     ['Manuel', 'Jeronimo', 'Nicolas'],
//     true,
//     'Argentina',
// ]

// //Going backwards in a loop!
// for (let i = ramiroArray.length - 1; i >= 0; i--) {
//     console.log(i, ramiroArray[i]);
// };

//Loops in Loops

// for (let series = 1; series < 4; series++) {
//     console.log(`--------Serie n${series}--------`);

//     for (let reps = 1; reps < 6; reps++) {
//         console.log(`Rep n${reps}`);
//     }
// };

//-------------------------------//


// In the while loop, we just include de condition in the format statement of the loop;
//This condition, it can be any type of condition, it just have to return a boolean. We not always need a counter;

// If we need we can initialize the variable counter outside de loop and the consecuence(i++) in the loop at the end. Its not always necesary

// the WHILE loop is more versatile than the FOR loop
// let rep = 1;
// while (rep <= 10) {
//     // console.log(`${rep} pull ups! 💪`);
//     rep++;
// };

// //Example with a dice (DADO);

// let dice = Math.trunc(Math.random() * 6 + 1);
// console.log(dice);

// while (dice !== 6) {
//     console.log(`you rolled a dice ${dice}`);
//     dice = Math.trunc(Math.random() * 6 + 1);
// }


//-------------------------------//

// Final Section Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }

// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length
// }

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

//-------------------------------//

// Finish Fundamentals skills!!

//-------------------------------//