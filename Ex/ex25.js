// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 

let numbers1 = [1, 2, 3, 4, 5];

let numbers2 = [4, 5, 6, 7, 8];

function merge(numbers1, numbers2) {

	return numbers1.filter(x => !numbers2.includes(x)).concat(numbers2.filter(x => !numbers1.includes(x)));

}

console.log(merge(numbers1, numbers2)); // [1, 2, 3, 6, 7, 8]