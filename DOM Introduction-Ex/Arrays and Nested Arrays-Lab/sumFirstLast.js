function sumFirstLast(input) {
    const first = Number(input[0]);
    const second = Number(input[input.length - 1]);
    return first + second;
}
// function sumFirstLast(input) {
//     return Number(input.pop()) + Number(input.shift())
// }
console.log(sumFirstLast(['20', '30', '40']));