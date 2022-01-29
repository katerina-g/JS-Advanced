function biggest(arrOfArr) {
    const max = Math.max(...[].concat(...arrOfArr));
    return max
}

console.log(biggest([[20, 50, 10],
    [8, 33, 145]]));
console.log(biggest([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));