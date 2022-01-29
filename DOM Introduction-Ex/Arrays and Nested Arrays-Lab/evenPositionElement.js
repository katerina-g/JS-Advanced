function evenElements(strArr) {
    let result = [];
    for (let i = 0; i < strArr.length; i += 2) {
        result[result.length] = strArr[i];
    }
    console.log(result.join(' '));
}

evenElements(['20', '30', '40', '50', '60'])