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

//Let Practice what we Learn up to Fundamentals

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

// Test data:

// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.

//-------------------------------//
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement


// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 

// JavaScript Fundamentals – Part 2

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!

// Your tasks:
/*
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time

Test data:

§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
*/






















// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) �



// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall


// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
// an argument. This function calculates the average of all numbers in the given 
// array. This is a difficult challenge (we haven't done this before)! Here is how to 
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, 
// start by creating a variable 'sum' that starts at 0. Then loop over the 
// array using a for loop. In each iteration, add the current value to the 
// 'sum' variable. This way, by the end of the loop, you have all values 
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the 
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// //-------------------------------//

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bills){
//     if (50 <= bills && bills <= 300){
//         let tip = bills * 0.15;
//         let total = bills + tip;
//         totals.push(total);
//         tips.push(tip);
//     }else{
//         let tip = bills * 0.2;
//         let total = bills + tip;
//         totals.push(total);
//         tips.push(tip);
//     }
// }

// for(let i = 0; i < bills.length; i++){
//     calcTip(bills[i]);
// }

// console.log(tips,totals);

// const calcAverage = function (arr) {
//     let sum = 0 ;
//     for (let i = 0; i < arr.length; i++){
//        sum += arr[i];
//     }
//     // console.log(sum);
//     return sum / arr.length;
// }

// console.log(calcAverage(bills)) ;
// console.log(calcAverage(totals)) ;
// console.log(calcAverage(tips)) ;




    



