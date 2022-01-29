function timeToWalk(arg1, arg2, arg3) {
    let steps = Number(arg1);
    let footPrint = Number(arg2);
    let speedKmH = Number(arg3);
    let distance = steps * footPrint;
    let speedMS = speedKmH / 3.6;
    let time = distance / speedMS;
    let rest = Math.floor(distance / 500);


    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)