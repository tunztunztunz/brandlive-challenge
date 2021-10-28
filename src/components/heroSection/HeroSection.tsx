import { Section } from "../common/Section"

import styles from './HeroSection.module.css';
import globalStyles from '../../App.module.css';
import wow from '../../images/wow.png';
import colors from "../../utils/colors"
import Countdown from "./countdown/Countdown";



const HeroSection = () => {
  return (
    <Section backgroundColor={colors.blue} className={styles.heroSection}>
      <div className={styles.textContainer}>
        <span className={globalStyles.xs}>Starts on nov 03, 2021 at 10:00 am pdt</span>
        <h1 className={globalStyles.xl}>Create standout virtual events, minus the cost and stress.</h1>
        <p>Learn how to create immersive, visually stunning virtual experiences where your video content is the centerpiece.</p>
        <Countdown />
      </div>
      <div className={styles.imageContainer}>
        <img src={wow} alt="" className={`${styles.heroImage}`} />
      </div>
    </Section>
  )
}

export default HeroSection;