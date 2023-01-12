const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector ('#hours');
const minutesElm = document.querySelector ('#minutes');
const secondsElm = document.querySelector ('#seconds');
const panelElm = document.querySelector('.panel');

// daysElm.innerHTML = 25;

// data di natale
const endDate = new Date("December 25 2023")
const endDateInMs = endDate.getTime();
console.log(endDate);

// oggi in MS
const nowInMs = new Date().getTime();

const diff = endDateInMs - nowInMs;

// tabella
const secondsInMs = 1000;
const minutesInMs = 60 * secondsInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;

console.log(diff / daysInMs);

daysElm.innerHTML = Math.floor( diff / daysInMs);
hoursElm.innerHTML = Math.floor( ( diff % daysInMs)  / hoursInMs );
minutesElm.innerHTML = Math.floor ((diff % hoursInMs) / minutesInMs);
secondsElm.innerHTML = Math.floor ((diff % minutesInMs) / secondsInMs);
console.log(diff % daysInMs) / hoursInMs;

const counterTimer = setInterval(timer, 1000);

function timer() {
    const nowInMs = new Date().getTime();

    const diff = endDateInMs - nowInMs;

    if( diff > 0 ) {
        daysElm.innerHTML = Math.floor( diff / daysInMs);
        hoursElm.innerHTML = Math.floor( ( diff % daysInMs)  / hoursInMs );
        minutesElm.innerHTML = Math.floor ((diff % hoursInMs) / minutesInMs);
        secondsElm.innerHTML = Math.floor ((diff % minutesInMs) / secondsInMs);
    } else {
        clearInterval(timer);
        panelElm.innerHTML = "<h1> 🎄 Buon Natale! 🎅🏻 </h1>";
    }
    
}

