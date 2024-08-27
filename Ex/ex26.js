// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

let numbers1 = [1, 2, 3, 4, 5];

let numbers2 = [4, 5, 6, 7, 8];

function merge(numbers1, numbers2) {

	return numbers1.filter(x => !numbers2.includes(x));

}

console.log(merge(numbers1, numbers2)); // [1, 2, 3]