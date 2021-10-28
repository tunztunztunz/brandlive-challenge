import { useEffect, useState } from 'react';

import updateCountdown from './useUpdateCountdown';
import styles from './Countdown.module.css';

const Countdown = () => {
  const [countdownDate] = useState(new Date('11/04/2021').getTime());
  const [time, setTime] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  })

  useEffect( () => {
    setInterval(() => {
      let timeObject = updateCountdown(countdownDate)
      if (timeObject) {
        setTime(timeObject);
      }
    }, 1000)
  }, [countdownDate])

  return (<div className={styles.clockContainer}>
    <ul>
      <li><span id="days">{time.days}</span>days</li>
      <li><span id="hours">{time.hours}</span>hours</li>
      <li><span id="minutes">{time.minutes}</span>minutes</li>
      <li><span id="seconds">{time.seconds}</span>seconds</li>
    </ul>
  </div>)
}

export default Countdown;