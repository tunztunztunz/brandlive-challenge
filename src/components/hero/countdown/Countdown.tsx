import styles from './Countdown.module.css';

const Countdown = () => {
  return (<div className={styles.clockContainer}>
    <ul>
      <li><span id="days">9</span>days</li>
      <li><span id="hours">6</span>hours</li>
      <li><span id="minutes">33</span>minutes</li>
      <li><span id="seconds">7</span>seconds</li>
    </ul>
  </div>)
}

export default Countdown;