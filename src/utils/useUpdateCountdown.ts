const updateCountdown = (countdownDate: number) => {
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

  if (countdownDate) {
    const currentTime = new Date().getTime();
    const distanceToEvent = countdownDate - currentTime;

    let days: number | string = Math.floor(distanceToEvent / day);
    let hours: number | string  = Math.floor((distanceToEvent % day) / (hour));
    let minutes: number | string  = Math.floor((distanceToEvent % hour) / (minute));
    let seconds: number | string  = Math.floor((distanceToEvent % minute) / (second));

    // .padStart withh add 0 before number if the string is less than two characts so it looks nicely formatted.
    let timeObject = {
      days: String(days),
      hours: String(hours),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0")
    };
    return timeObject;
  }
}

export default updateCountdown;