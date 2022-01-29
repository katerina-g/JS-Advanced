function biggerHalf(numbers) {
    numbers.sort((a, b) => a - b);
    const middle = Math.floor(numbers.length / 2);
    const result = numbers.slice(middle);
    return result
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));