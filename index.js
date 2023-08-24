var resultElement = document.querySelector('#result');
var plusEl = document.querySelector('#plus');
var minusEl = document.querySelector('#minus');
var multiplyEl = document.querySelector('#multiply');   
var divideEl = document.querySelector('#divide');
var potegaEl = document.querySelector('#potega');   
var pierwiastekEl = document.querySelector('#pierwiastek');

plusEl.addEventListener('click', onButtonClick);
minusEl.addEventListener('click', onButtonClick);
multiplyEl.addEventListener('click', onButtonClick);
divideEl.addEventListener('click', onButtonClick);
potegaEl.addEventListener('click', onButtonClick);
pierwiastekEl.addEventListener('click', onButtonClick);

var number1 = document.querySelector('#num1');
var number2 = document.querySelector('#num2');

function getNumber1() {
    return Number(number1.value)
}
function getNumber2() { 
    return Number(number2.value)
}

function onButtonClick(sss) {
    var clickedElement = sss.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

function makeOperation(operationCode) {
    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();
    }
    else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();
    }
    else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();
    }
    else if (operationCode === '/') {
        var result = getNumber1() / getNumber2();
    }
    else if (operationCode === '**') {
        var result = Math.pow(getNumber1(), getNumber2());
    }
    else if (operationCode === '//') {
        var result = Math.sqrt(getNumber1());
    }
    else {
        window.alert('Opperation is unknown')
    }
    resultElement.textContent = result;
}
