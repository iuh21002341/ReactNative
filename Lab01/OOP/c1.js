const Car = function (make, speed) {
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

const bmw = new Car('BMW', 120);

const mercedes = new Car('Mercedes', 95);

bmw.acclereate();

bmw.acclereate();

bmw.brake();

bmw.brake();

mercedes.acclereate();

mercedes.acclereate();

mercedes.brake();

mercedes.brake();
