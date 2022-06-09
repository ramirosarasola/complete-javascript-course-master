// // Coding Challenge #1

// //A)

// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

// //B)

// // const markWeight = 95;
// // const markHeight = 1.88;

// // const johnWeight = 85;
// // const johnHeight = 1.76;

// // RTA:

// const markBMI = markWeight / (markHeight ** 2);
// const johnBMI = johnWeight / (johnHeight ** 2);

// let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// // Coding Challenge #2

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than Jhon's BMI (${johnBMI})`);
// } else {
//     console.log(`Mark's BMI (${markBMI}) is lower than Jhon's BMI (${johnBMI})`);
// }

// Coding Challenge #3

const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 80;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 50;

const minScore = 100;

const dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(`Dolphins Avg: ${dolphinsAvg}, Koalas avg: ${koalasAvg}`);


// if (dolphinsAvg > koalasAvg  && dolphinsAvg >= minScore) {
//     console.log('The winner of the competition is Dolphins!');
// } else if (dolphinsAvg === koalasAvg) {
//     console.log('It is a draw!');
// } else {
//     console.log('The winner of the competition is Koalas!')
// }

if ((dolphinsAvg < 100) && (koalasAvg < 100)) {
    console.log('There is no winner')
} else if (dolphinsAvg > koalasAvg) {
    console.log('The winner of the competition is Dolphins!');
} else if (dolphinsAvg === koalasAvg) {
    console.log('It is a draw!');
} else {
    console.log('The winner of the competition is Koalas!')
}

// Coding Challenge #4

console.log(' ------- Challenge #4 -------');

const bill = 50;

let tip = 50 <= bill && bill <= 300 ? (bill * 0.15) : (bill * 0.2);

console.log(`The bill was 275, the tip was ${tip}, and the total value ${bill + tip}.`)