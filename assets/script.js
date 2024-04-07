let runningTotal = 0;
let buffer = "0";
let previusOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = '0';
            break;
        case '=';
            if (previusOperator === null) {
                return
            }
            flushOperation(parseInt(buffer));
            previusOperator = null;
            buffer = runningTotal;
            break;
        case '←'
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break
        case '+';
        case '−';
        case '×';
        case '÷';
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0{
        runningTotal = intBuffer;
    } else {
    }
}