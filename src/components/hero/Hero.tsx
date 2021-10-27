import { Section } from "../common/Section"

import styles from './Hero.module.css';
import globalStyles from '../../App.module.css';
import wow from '../../images/wow.png';
import colors from "../../utils/colors"
import Countdown from "./countdown/Countdown";



const Hero = () => {
  return (
    <Section backgroundColor={colors.blue} className={styles.heroSection}>
      <div className={styles.textContainer}>
        <p className={globalStyles.xs}>Starts on nov 03, 2021 at 10:00 am pdt</p>
        <h1 className={globalStyles.xl}>Create standout virtual events, minus the cost and stress.</h1>
        <p>learn how to create immersive, visually stunning virtual experiences where your video content is the centerpiece.</p>
        {/* Clock */}
        <Countdown />
      </div>
      <div className={styles.imageContainer}>

      <img src={wow} alt="" className={`${styles.heroImage}`} />
      </div>
    </Section>
  )
}

export default Hero;