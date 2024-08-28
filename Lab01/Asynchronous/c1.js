function whereAmI(lat, lnng) {
	const url = `https://geocode.xyz/${lat},${lnng}?json=1`;

	fetch(url)
		.then(res => {
			if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
			return res.json();
		})
		.then(data => {
			const city = data.city || 'Unknown city';
			const country = data.country || 'Unknown country';
			
			console.log(`You are in ${city}, ${country}`);
		})
		.catch(err => console.error(err));
}	

whereAmI(52.508, 13.381);