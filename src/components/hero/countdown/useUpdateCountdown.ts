const updateCountdown = (countdownDate: number) => {
  const second: number | string = 1000,
  minute: number | string  = second * 60,
  hour: number | string  = minute * 60,
  day: number | string  = hour * 24;

  if (countdownDate) {
    const currentTime = new Date().getTime();
    const distanceToEvent = countdownDate - currentTime;

    let days = Math.floor(distanceToEvent / day);
    let hours = Math.floor((distanceToEvent % day) / (hour));
    let minutes = Math.floor((distanceToEvent % hour) / (minute));
    let seconds = Math.floor((distanceToEvent % minute) / (second));

    // if(minutes < 10) {
    //   minutes = "0" + minutes;
    // }
    
    let timeObject = {
      days: String(days),
      hours: String(hours),
      minutes: String(minutes),
      seconds: String(seconds)
    }
    return timeObject;
  }
}

export default updateCountdown;