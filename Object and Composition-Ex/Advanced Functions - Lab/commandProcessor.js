function solution() {
    let text = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(str) {
        text += str;
    }

    function removeStart(n) {
        text = text.slice(n);
    }

    function removeEnd(n) {
        text = text.slice(0, -n);
    }

    function print() {
        console.log(text);
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();