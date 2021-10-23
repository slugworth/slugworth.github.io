let calcValues = [];
let goodValues = [];
let keepGoing = true;

function runCalc() {
    let i = 0;

    do {
        calcValues.push({ x: '', op: '', y: '', result: '' });

        getX(calcValues[i]);
        getOperator(calcValues[i]);
        getY(calcValues[i]);

        if (confirm('Continue?')) {
            i++;
        } else {
            keepGoing = false;
        }

    } while (keepGoing);

    doOutput();
}

function getX(thisVar) {
    do {
        thisVar.x = prompt('Value of x');
    } while (thisVar.x === '');
}

function getY(thisVar) {
    do {
        thisVar.y = prompt('Value of y');
    } while (thisVar.y === '');
}

function getOperator(thisVar) {
    do {
        thisVar.op = prompt('operator').charAt(0);
    } while (thisVar.op === '');
}

function doOutput() {
    document.write('<body><table>');
    document.write('<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>');

    calcValues.forEach(val => {
        getResult(val)
    });

    document.write('</table>');
    document.write('<br><br>');
    document.write('<table>');
    document.write('<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>');

    getStats();

    document.write('</table></body>');
}

function getResult(val) {
    let isBad = false;

    if (isNaN(val.x) || isNaN(val.y)) {
        val.result = 'wrong input number';
        isBad = true;
    } else {
        switch (val.op) {
            case '+':
                val.result = Number(val.x) + Number(val.y);
                break;

            case '-':
                val.result = Number(val.x) - Number(val.y);
                break;

            case '*':
                val.result = Number(val.x) * Number(val.y);
                break;

            case '/':
                val.result = Number(val.x) / Number(val.y);
                break;

            case '%':
                val.result = Number(val.x) % Number(val.y);
                break;

            default:
                val.result = 'computation error';
                isBad = true;
                break;
        }
    }

    let row = '<tr><td>';
    row += val.x;
    row += '</td><td class="calcoperator">';
    row += val.op;
    row += '</td><td>';
    row += val.y;
    row += '</td><td>';
    row += val.result;
    row += '</td></tr>';
    document.write(row);

    if (!isBad) {
        goodValues.push(val);
    }
}

function getStats() {
    let min;
    let max;
    let avg;
    let total;

    if (!goodValues.length) {
        min = 'N/A';
        max = 'N/A';
        avg = 'N/A';
        total = 'N/A';
    } else {
        min = Number.MAX_SAFE_INTEGER;
        max = Number.MIN_SAFE_INTEGER;
        avg = 0;
        total = 0;

        goodValues.forEach(val => {
            if (val.result < min) {
                min = val.result;
            }

            if (val.result > max) {
                max = val.result;
            }

            total += val.result;
        });

        avg = total / goodValues.length;
    }

    let row = '<tr><td>';
    row += min;
    row += '</td><td>';
    row += max;
    row += '</td><td>';
    row += avg;
    row += '</td><td>';
    row += total;
    row += '</td></tr>';
    document.write(row);
}

window.onload = runCalc;