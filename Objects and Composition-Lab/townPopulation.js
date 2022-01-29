function popululation(arrTowns) {
    const towns = {};
    for (let townAsStr of arrTowns) {
        let [name, popul] = townAsStr.split(' <-> ');
        popul = Number(popul);
        if (towns[name] != undefined) {
            popul += towns[name];
        }
        towns[name] = popul;

    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

popululation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
popululation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);