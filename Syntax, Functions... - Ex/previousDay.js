function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDate = date.getDate();
    return `${newYear}-${newMonth}-${newDate}`;
}

console.log(previousDay(2016, 10, 1));