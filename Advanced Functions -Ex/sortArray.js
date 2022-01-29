function sortArray(numList, order) {
    
    if (order == 'asc') {
        return numList.sort((a, b) => a - b);
    } else {
        return numList.sort((a, b) => b -a);
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));