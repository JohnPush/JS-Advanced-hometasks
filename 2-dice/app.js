'use strict';


function random(dice) {
	return `${dice}: ${Math.floor(Math.random() * dice.slice(1) + 1)}`
}
console.log(random('d4'));
console.log(random('d6'));
console.log(random('d8'));
console.log(random('d10'));
console.log(random('d12'));
console.log(random('d16'));
console.log(random('d20'));