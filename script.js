const body = document.querySelector('body');
const h1 = body.appendChild(document.createElement('h1'))

h1.setAttribute('style', 'font-family: "Orbitron", sans-serif;');

const minTwoDigits = (n => n < 10 ? `0${n}`: `${n}`);

setInterval(() => {
    const now = new Date();
    const time = {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    }
    
    h1.innerHTML = `${time.hours} : ${minTwoDigits(time.minutes)} : ${minTwoDigits(time.seconds)}`;

}, 1000);
