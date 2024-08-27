// 18. Print the first 100 prime numbers 

function isPrime(n) {
	
	if (n <= 1) {
		return false;
	}

	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;

}

let count = 0;
let n = 2;

while (count < 100) {

	if (isPrime(n)) {
		console.log(n);
		count++;
	}

	n++;

}
