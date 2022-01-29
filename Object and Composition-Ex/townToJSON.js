function townToJSON(arr){
    const result = [];
    const splitted = arr[0].split('|');
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitude = splitted[3].trim();
    
    for (i = 1; i < arr.length; i++) {
        const objResult = {};
        const splEntry = arr[i].split('|');
        objResult[town] = splEntry[1].trim();
        objResult[latitude] = Number(Number(splEntry[2].trim()).toFixed(2));
        objResult[longitude] = Number(Number(splEntry[3].trim()).toFixed(2));
        result.push(objResult);
    }
    return JSON.stringify(result);

}


console.log(townToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))