const bill = 275;
const tip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip(bill)}, and the total value ${bill + tip(bill)}`);