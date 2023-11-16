'use strict';

class Car {
	#brand;
	#model;
	#mileage;

	constructor(brand, model, mileage) {
		this.#brand = brand;
		this.#model = model;
		this.#mileage = mileage;
	}

	get mileage() {
		return this.#mileage;
	}

	set mileage(value) {
		if (value >= 0) {
			this.#mileage = value;
		} else {
			console.log("Пробег не может быть отрицательным.");
		}
	}

	info() {
		console.log(`Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage} км`);
	}
}

const car = new Car('Fiat', 'Marea', 123);
car.info();

car.mileage = 150;
car.info();