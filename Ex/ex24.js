// 24. Create a function that will merge two arrays and return the result as a new array

let numbers1 = [1, 2, 3, 4, 5];

let numbers2 = [6, 7, 8, 9, 10];

function merge(numbers1, numbers2) {

	return numbers1.concat(numbers2);

}

console.log(merge(numbers1, numbers2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]