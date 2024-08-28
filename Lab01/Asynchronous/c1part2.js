async function getCountryData(country) {
	const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
	await fetch(url)
		.then(res => {
			if (!res.ok) throw new Error(`Country not found (${res.status})`);
			return res.json();
		})
		.then(data => {
			const country = data[0];
			console.log(`Country: ${country.name.common}`);
			console.log(`Region: ${country.region}`);
			console.log(`Capital: ${country.capital[0]}`);
		})
		.catch(err => console.error(err));
}

async function whereAmI(lat, lnng) {
	const url = `https://geocode.xyz/${lat},${lnng}?json=1`;

	return await fetch(url)
		.then(res => {
			if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
			return res.json();
		})
		.then(data => {
			const country = data.country || 'Unknown country';
			// if (country === 'Unknown country') {
			// 	throw new Error('Country not found');
			// }
			console.log(`You are in ${data.city || 'Unknown city'}, ${country}`);

			getCountryData(country);
		})
		.catch(err => console.error(err));
}

whereAmI(52.508, 13.381);

whereAmI(19.037, 72.873);

whereAmI(-33.933, 18.474);
