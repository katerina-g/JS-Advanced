function solve (arr) {
    const result = [];
    // let biggest = Number.MIN_SAFE_INTEGER;
    let biggest = arr[0];
 
    arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }
 
        return accumulated;
    }, result)
 
    return result;
}
console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));