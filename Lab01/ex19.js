// 19. Create a function that will return in an array the first “p” prime numbers greater than “n” 

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

function getPrimes(p, n) {
	
	let primes = [];
	let count = 0;

	while (count < p) {

		if (isPrime(n)) {
			primes.push(n);
			count++;
		}

		n++;

	}

	return primes;

}

console.log(getPrimes(10, 100)); // [101, 103, 107, 109, 113, 127, 131, 137, 139, 149]