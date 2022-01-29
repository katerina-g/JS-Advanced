function rotate(arr, steps) {
    for (let i = 0; i < steps; i ++) {
        let el = arr.pop();
        arr.unshift(el)
    }
    return arr.join(' ')
}
console.log(rotate(['1', 
'2', 
'3', 
'4'], 
2));
console.log(rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));