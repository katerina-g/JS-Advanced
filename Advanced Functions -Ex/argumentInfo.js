function solve(...args) {
    const obj = {};
    
    let res = args.map(o => {
        obj[typeof o] = (obj[typeof o] || 0) + 1
        return `${typeof o}: ${o}`
    });
    res.forEach(r => console.log(r))
    Object.entries(obj)
        .sort((k, v) => v[1] - k[1])
        .map(([text, counter]) =>
            console.log(`${text} = ${counter}`));

}
solve('cat', 42, function () { console.log('Hello world!'); })