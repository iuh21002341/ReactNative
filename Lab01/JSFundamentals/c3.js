const calcAverage = (a, b, c) => (a + b + c) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log("No team wins...");
	}
}

// Test data 1
let scoreDolphins = calcAverage(96, 108, 89);
let scoreKoalas = calcAverage(88, 91, 110);
checkWinner(scoreDolphins, scoreKoalas);

// Test data Bonus 1
scoreDolphins = calcAverage(97, 112, 101);
scoreKoalas = calcAverage(109, 95, 123);
checkWinner(scoreDolphins, scoreKoalas);

// Test data Bonus 2
scoreDolphins = calcAverage(97, 112, 101);
scoreKoalas = calcAverage(109, 95, 106);
checkWinner(scoreDolphins, scoreKoalas);
