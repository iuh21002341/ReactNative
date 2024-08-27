//21. Rotate an array to the right 1 position 
let numbers = [1, 2, 3, 4, 5];

function rotateRight(numbers) {
	
	let last = numbers.pop();
	numbers.unshift(last);
	return numbers;

}

console.log(rotateRight(numbers)); // [5, 1, 2, 3, 4]