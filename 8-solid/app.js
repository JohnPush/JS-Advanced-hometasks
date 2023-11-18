'use strict';

class Billing {
	constructor(amount) {
		this.amount = amount;
	}
	calculateTotal () {
		return this.amount;
	};
}

class FixBilling extends Billing {
	constructor(amount) {
		super(amount)
	};
	calculateTotal () {
		return this.amount;
	};
}

class HourBilling extends Billing {
	constructor(amount, hours) {
		super(amount)
		this.hours = hours;
	};
	calculateTotal () {
		return this.amount * this.hours;
	};
}

class ItemBilling extends Billing {
	constructor(amount, items) {
		super(amount)
		this.items = items;
	};
	calculateTotal () {
		return this.amount * this.items;
	};
}

const billing = new Billing(10);
console.log("Billing:", billing.calculateTotal());

const fixBilling = new FixBilling(100);
console.log("FixBilling:", fixBilling.calculateTotal());

const hourBilling = new HourBilling(100, 5);
console.log("HourBilling:", hourBilling.calculateTotal());

const itemBilling = new ItemBilling(100, 10);
console.log("ItemBilling:", itemBilling.calculateTotal());