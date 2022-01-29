function radar(speed, area) {
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let difference = 0;
    let zoneSpeed = 0;
    let overLimit = ''

    switch(area) {
        case 'motorway':
            zoneSpeed = motorwaySpeed;
            break;
        case 'interstate':
            zoneSpeed = interstateSpeed;
            break;
        case 'city':
            zoneSpeed = citySpeed;
            break;
        case 'residential':
            zoneSpeed = residentialSpeed;
            break;
    }
    if (speed > zoneSpeed) {
        difference = speed - zoneSpeed;
    }
    if (difference == 0) {
        console.log(`Driving ${speed} km/h in a ${zoneSpeed} zone`);
    } else {
        if (difference <= 20) {
            overLimit = "speeding";
        } else if (difference <= 40) {
            overLimit = "excessive speeding";
        } else {
            overLimit = "reckless driving"
        }
 
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${zoneSpeed} - ${overLimit}`)
    }
}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')