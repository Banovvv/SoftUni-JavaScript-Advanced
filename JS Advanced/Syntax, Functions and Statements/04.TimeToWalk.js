function calculateTime(steps, meters, speed){
    let distance = (steps * meters) / 1000;
    let stops = Math.floor(distance / 0.5);
    let time = 60 * (distance / speed) + stops;

    let hours = Math.floor(time / 60).toString().padStart(2, 0);
    let minutes = Math.floor(time).toString().padStart(2, 0);
    let seconds = Math.ceil(60 * (time % 1)).toString().padStart(2, 0);

    console.log(hours + ':' + minutes + ':' + seconds);
}

calculateTime(4000, 0.6, 5);
calculateTime(2564, 0.70, 5.5)