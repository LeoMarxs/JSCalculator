function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.value);
        let historyList = document.getElementById('history-list');
        let listItem = document.createElement('li');
        listItem.textContent = `${display.value} = ${result}`;
        historyList.prepend(listItem);
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}

function calculatePercentage() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.value) / 100;
        addToHistory(display.value + '%', result);
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}

function addToHistory(expression, result) {
    let historyList = document.getElementById('history-list');
    let listItem = document.createElement('li');
    listItem.textContent = `${expression} = ${result}`;
    historyList.prepend(listItem);
}