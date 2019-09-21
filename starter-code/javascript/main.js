const chronometer = new Chronometer();
const btnLeft     = document.getElementById('btnLeft');
const btnRight    = document.getElementById('btnRight');
const minDec      = document.getElementById('minDec');
const minUni      = document.getElementById('minUni');
const secDec      = document.getElementById('secDec');
const secUni      = document.getElementById('secUni');
const milDec      = document.getElementById('milDec');
const milUni      = document.getElementById('milUni');


function printTime() {
    
   const decMin =  printMinutes().split("")[0];
   const unMin = printMinutes().split("")[1];
   const decSec = printSeconds().split("")[0];
   const unSec = printSeconds().split("")[1];

   minDec.innerText = decMin;
   unMin.innerText = unMin;
   secDec.innerText = decSec;
   secUni.innerText = unSec;
}

function printMinutes() {
    return `${chronometer.twoDigitsNumber(chronometer.getMinutes())}`;
}

function printSeconds() {
    return `${chronometer.twoDigitsNumber(chronometer.getSeconds())}`;
}

function printMilliseconds() {

}

function printSplit() {
    const splits = document.getElementById("splits");
    const listE = document.createElement("li");
    const time = ` ${printMinutes()} : ${printSeconds()}`;
    listE.innerText = time;
    splits.append(listE);
}

function clearSplits() {
    const splits = document.getElementById("splits")
    splits.innerHTML = "";
}

function setStopBtn() {
    btnLeft.innerText = 'STOP'
    btnLeft.removeAttribute("class", "start")
    btnLeft.setAttribute("class", "btn stop")
}

function setSplitBtn() {
    btnRight.innerText = 'SPLIT'
    btnRight.removeAttribute("class", "reset")
    btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
    btnLeft.innerText = 'START'
    btnLeft.removeAttribute("class", "stop")
    btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
    btnRight.innerText = 'RESET'
    btnRight.removeAttribute("class", "split")
    btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText === 'START') {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        setInterval(printTime, 500);
    } else {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    if (btnRight.innerText === 'RESET') {
        clearSplits();
        chronometer.resetClick();
    } else {
        printSplit();
    }
});
