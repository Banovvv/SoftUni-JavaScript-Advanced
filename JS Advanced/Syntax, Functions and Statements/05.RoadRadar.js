function roadRadar(speed, area) {
  const residentialLimit = 20;
  const cityLimit = 50;
  const interstateLimit = 90;
  const motorwayLimit = 130;

  if (area == "residential") {
    if (speed <= residentialLimit) {
      console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
    } else {
      let difference = speed - residentialLimit;
      let status =
        difference <= 20
          ? "speeding"
          : difference <= 40
          ? "excessive speeding"
          : "reckless driving";

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`
      );
    }
  } else if (area == "city") {
    if (speed <= cityLimit) {
      console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
    } else {
      let difference = speed - cityLimit;
      let status =
        difference <= 20
          ? "speeding"
          : difference <= 40
          ? "excessive speeding"
          : "reckless driving";

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`
      );
    }
  } else if (area == "interstate") {
    if (speed <= interstateLimit) {
      console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
    } else {
      let difference = speed - interstateLimit;
      let status =
        difference <= 20
          ? "speeding"
          : difference <= 40
          ? "excessive speeding"
          : "reckless driving";

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`
      );
    }
  } else if (area == "motorway") {
    if (speed <= motorwayLimit) {
      console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
    } else {
      let difference = speed - motorwayLimit;
      let status =
        difference <= 20
          ? "speeding"
          : difference <= 40
          ? "excessive speeding"
          : "reckless driving";

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`
      );
    }
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
