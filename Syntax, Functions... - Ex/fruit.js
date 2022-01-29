function solve(fruit, weight, price) {
    weightKilos = Number(weight) / 1000;
    price = Number(price);
    moneyNeed = (price * weightKilos).toFixed(2)
    console.log(`I need $${moneyNeed} to buy ${weightKilos.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)