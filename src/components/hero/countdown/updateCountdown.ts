// interface UpdateCountdownInterface {
//   countdownDate: number;
// }

const updateCountdown = (countdownDate: number) => {
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

  if (countdownDate) {
    const currentTime = new Date().getTime();
    const distanceToEvent = countdownDate - currentTime;

    let days = Math.floor(distanceToEvent / day);
    let hours = Math.floor((distanceToEvent % day) / (hour));
    let minutes = Math.floor((distanceToEvent % hour) / (minute));
    let seconds = Math.floor((distanceToEvent % minute) / (second));
    let timeObject = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
    return timeObject;
  }
}

export default updateCountdown;