// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 

let numbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10];

function getPositiveNumbers(numbers) {
	
	let positiveNumbers = [];

	for (let i = 0; i < numbers.length; i++) {

		if (numbers[i] > 0) {

			positiveNumbers.push(numbers[i]);

		}

	}

	return positiveNumbers;

}

console.log(getPositiveNumbers(numbers)); // [2, 4, 6, 8, 10]