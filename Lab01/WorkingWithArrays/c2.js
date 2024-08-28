function calcAverageHumanAge(ages) {
	const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
	const adults = humanAges.filter(age => age >= 18);
	const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
	console.log(average);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);