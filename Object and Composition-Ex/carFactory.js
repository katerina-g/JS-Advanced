function carFactory(obj){
    cars = {};
    function getEngine(power) {
        if (power <= 90) {
            return {power: 90, volume: 1800};
        } else if (power <= 120) {
            return {power: 120, volume: 2400};
        } else {
            return {power: 200, volume: 3500}
        }
    }
    const propWheeelSize = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    cars.model = obj.model;
    cars.engine = getEngine(obj.power)
    cars.carriage = {type: obj.carriage, color: obj.color};
    cars.wheels = new Array(4).fill(propWheeelSize, 0, 4);

    return cars
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));