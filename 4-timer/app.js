'use strict';


function countdown() {
    const now = new Date();
	const maxDateThisMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const months = 11 - now.getMonth();
    const days = maxDateThisMonth.getDate() - now.getDate();
    const hours = 24 - now.getHours();
    const minutes = 60 - now.getMinutes();
    const seconds = 60 - now.getSeconds();

    const countdownString = months + ' месяцев, ' + days + ' дней, ' + hours + ' часов, ' + minutes + ' минут, ' + seconds + ' секунд';
    
	document.getElementById("timerNewYear").innerHTML = countdownString;
    setTimeout(countdown, 1000);
}
countdown();