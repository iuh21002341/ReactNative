function checkDogs(dogsJulia, dogsKate) {
	const dogsJuliaCorrected = dogsJulia.slice(1, -2);
	const dogs = dogsJuliaCorrected.concat(dogsKate);
	dogs.forEach((dog, i) => {
		console.log(`Dog number ${i + 1} is ${dog >= 3 ? 'an adult' : 'a puppy'}, and is ${dog} years old`);
	});
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

