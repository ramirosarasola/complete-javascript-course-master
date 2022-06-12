// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//prettier => we can brose (https://prettier.io/docs/en/configuration.html) for personalization;
//snippets
//manage => settings => open setting (JSON) there we can style our vscode ex: comments;

//live server from extension;

//install node.js => to check if we have install it correctly we can command node -v => so we can check which version we had install.

//My live-server Problems!: 
// PS C:\Users\ramir\Desktop\JS By Jonas Schmedtmann\complete-javascript-course-master> live-server
// live-server : No se puede cargar el archivo C:\Users\ramir\AppData\Roaming\npm\live-server.ps1 porque la ejecución de scripts está deshabilitada en este sistema. Para obtener más información, consulta  
// el tema about_Execution_Policies en https:/go.microsoft.com/fwlink/?LinkID=135170.
// En línea: 1 Carácter: 1
// + live-server
// + ~~~~~~~~~~~
//     + CategoryInfo          : SecurityError: (:) [], PSSecurityException
//     + FullyQualifiedErrorId : UnauthorizedAccess
// PS C:\Users\ramir\Desktop\JS By Jonas Schmedtmann\complete-javascript-course-master>



///////////////////////////////////////
// How to code:

//Clear goals
//Dont copy code - dont move on if you dont understand your code
//Refore coding - practice!! - challenge your self - codewars!
//Dont frustate - Get back a refore undestand topics
//Get motivate - Its difficult to know everything - u r not aline in these struggles. Also experts keep on learning
//Share learning skills - Explaining is a very way to learn #100DaysOfCode online!! Discord!
//Be sure you can build an app on your own - Courses are just the beggining of your journey

///////////////////////////////////////
// How to think as a Developer
//Solving Problems!

//1. Understand 100% the problem!
//2. Divide and conquer. Dividing the big problem into sub-problems
//3. Research as much as u need (Google, MDN, stack overflow)
//4. write pseudo-code, before writing the actual code. Programing for peolpe undestanding not computers. (Clear ideas!).
//5. Genious curiosity.
//
///////////////////////////////////////
// Google, MDN, stack overflow

// Exercise:

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temp amplitude? Answer: difference between highest and lowest temp
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what do do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max (amplitude) and return it

// const calcTempAplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         let curTemps = temps[i];

//         if(typeof curTemps !== 'number') continue;

//         if (curTemps > max) max = curTemps;
//         if (curTemps < min) min = curTemps;
//     }
//     console.log(max, min);
//     return max - min;
// }

// // calcTempAplitude([1,1,5,51,5,3,-15,-1]);
// const amplitude = calcTempAplitude(temperatures);
// console.log(amplitude);

///////////////////////////////////////
// CHALLENGE #1

//1. 

//obtener info de los arrays. Print to console 'index[i]Celcius in [i] days...index[i]Celcius in [i] days...index[i]Celcius in [i] days...'

// let forecasted = [17,21,23];

// const printForecast = function (arr){
//     // let days = 1;
//     let str = "";

//     for (let i = 0; i < arr.length; i++){
//         // let days = i+1;
//         // debugger;
//         str += `${arr[i]} Celcius Grades in ${i+1} days... `
//         // days++;
//     }
//     console.log("... " + str)
// }

// printForecast(forecasted);



