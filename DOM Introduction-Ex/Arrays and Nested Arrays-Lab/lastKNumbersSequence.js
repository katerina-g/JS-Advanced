function solved(arrLength, numToSumm) {
    let result = [1];

    for(let i=1; i<arrLength; i++) {
         let startIndex = Math.max(0, i-numToSumm);
         let currentElement = result.slice(startIndex, startIndex + numToSumm).reduce((a, b) => a + b, 0);
         result.push(currentElement);
    }

    return result;
}
// console.log(solved(6,3))
console.log(solved(8,2))