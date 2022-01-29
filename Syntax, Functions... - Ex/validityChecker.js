function validityChecker(x1, y1, x2, y2) {

    function checkResult(x1, y1, x2, y2) {

        const formula = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

        const validation = Number.isInteger(formula) ? 'valid' : 'invalid';

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validation}`);

    }
    checkResult(x1, y1, 0, 0);
    checkResult(x2, y2, 0, 0);
    checkResult(x1, y1, x2, y2);

}


validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)