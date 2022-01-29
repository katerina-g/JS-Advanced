function addRemove(arr) {
    let counter = 0;
    let result = [];
    for (let el of arr) {
        counter += 1;
        if (el == 'add') {
            result.push(counter);
        } else{
            result.pop()
        }
    }
    if (result.length > 0) {
        return result.join('\n');
    } else{
        return `Empty`;
    }

}
console.log(addRemove(['add', 
'add', 
'add', 
'add']
));