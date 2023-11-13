'use strict';


function ageVerification(birthday) {
	const birthdayDate = new Date(birthday);
	const now = new Date();
	if ((now.getFullYear() - birthdayDate.getFullYear()) < 14) {
		return false;
	}
	if (now.getMonth() !== birthdayDate.getMonth()) {
		return false;
	}
	if (now.getDate() !== birthdayDate.getDate()) {
		return false;
	}
	return true;
}

console.log(ageVerification('2022-01-01'));