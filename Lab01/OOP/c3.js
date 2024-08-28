function Car(make, speed) {
	this.make = make;
	this.speed = speed;
}

Car.prototype.acclereate = function () {
	this.speed += 10;
	console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.make} is going at ${this.speed} km/h`);
}

function EV(make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.contructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
}

EV.prototype.acclereate = function () {
	this.speed += 20;
	this.charge--;
	console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.acclereate();

tesla.acclereate();

tesla.brake();

tesla.chargeBattery(90);

console.log(tesla);



