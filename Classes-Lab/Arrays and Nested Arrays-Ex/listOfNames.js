function sortNames(arr) {
    const result = arr.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    arr.forEach(element => {
        console.log(`${counter}.${element}`);
        counter += 1
    });
    
}
sortNames(["John", "Bob", "Christina", "Ema"])