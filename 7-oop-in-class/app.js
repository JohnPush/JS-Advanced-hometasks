'use strict';

class Personage {
	constructor(race, name, language) {
		this.race = race;
		this.name = name;
		this.language = language;
	}

	speak () {
		console.log(`My name is ${this.name}, and I speak ${this.language}.`);
	};
}

class Orc extends Personage {
	constructor(race, name, language, weapon) {
		super(race, name, language,)
		this.weapon = weapon;
	};

	speak () {
		console.log(`${this.name} speaks with a stutter.`);
	};

	hit () {
		console.log(`${this.name} stabs with a ${this.weapon}.`);
	};

}

class Elf extends Personage {
	constructor(race, name, language, spell) {
		super(race, name, language,)
		this.weapon = spell;
	};

	speak () {
		console.log(`${this.name} swears.`);
	};

	conjure () {
		console.log(`${this.name} stabs with a ${this.weapon}.`);
	};
}

const orc = new Orc('Orc', 'Gypsy', 'Orcish', 'knife');
orc.speak();
orc.hit();
console.log(orc);

const elf = new Elf('Elf', 'Hat with ear flaps', 'Elvish', 'Wootsley Pootsley');
elf.speak();
elf.conjure();
console.log(elf);