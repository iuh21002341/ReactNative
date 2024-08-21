// 20. Rotate an array to the left 1 position 

let numbers = [1, 2, 3, 4, 5];

function rotateLeft(numbers) {
	
	let first = numbers.shift();
	numbers.push(first);
	return numbers;

}

console.log(rotateLeft(numbers)); // [2, 3, 4, 5, 1]