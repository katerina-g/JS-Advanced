function caloriesObject(arrStr) {
    let obj = {}
    for (let i = 0; i < arrStr.length; i += 2) {
        obj[arrStr[i]] = Number(arrStr[i + 1]);
    }
    return obj
}
console.log(caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(caloriesObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));