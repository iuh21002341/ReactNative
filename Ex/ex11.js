// 11. Calculate the average of the numbers in an array of numbers 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {

	sum += numbers[i];

}

let average = sum / numbers.length;

console.log(average);