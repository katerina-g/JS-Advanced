function solve(size) {
    if (size) {
        size = Number(size);
    } else {
        size = 5;
    }
    for (let i = 1; i <= size; i++) {
        console.log("* ".repeat(size));
    }
}

solve(1)
solve(2)