function sum(num) {
    let sum = num;

    function add(num2) {
        sum += num2;
        return add;
    }

    add.toString = () => {
        return sum;
    }
    return add;
}

console.log(sum(1)(6)(-3).toString());
