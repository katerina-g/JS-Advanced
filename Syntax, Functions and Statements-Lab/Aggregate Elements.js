function solve(input) {
    let sum = 0;
    let sumInverse = 0;
    let concat = '';
    for (let i = 0; i < (input.length); i++) {
        sum += input[i];
        sumInverse += 1 / input[i];
        concat += input[i];
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

solve([2, 4, 8, 16])