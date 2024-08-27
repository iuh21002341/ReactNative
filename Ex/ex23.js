// 23. Reverse a string

let str = "Hello World";

function reverse(str) {

	return str.split("").reverse().join("");

}

console.log(reverse(str)); // "dlroW olleH"