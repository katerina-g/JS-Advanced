function diagonalSum(matrix) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < matrix.length; i ++) {
        first += matrix[i][i];
        second += matrix[i][matrix.length - i - 1];
    } 
    console.log(`${first} ${second}`);
}   
(diagonalSum([[20, 40],
    [10, 60]]));