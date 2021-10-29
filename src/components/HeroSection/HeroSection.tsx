import Section from "../Common/Section"
import Countdown from "./Countdown/Countdown";
import colors from "../../utils/colors"
import styles from './HeroSection.module.css';
import globalStyles from '../../App.module.css';
import wow from '../../images/wow.png';
import text from '../../text/hero.json';


const HeroSection = () => {
  return (
    <Section backgroundColor={colors.blue} className={styles.heroSection}>
      <div className={styles.textContainer}>
        <span className={globalStyles.xs}>{text.kicker}</span>
        <h1 className={globalStyles.xl}>{text.header}</h1>
        <p>{text.mainCopy}</p>
        <Countdown />
      </div>
      <div className={styles.imageContainer}>
        <img src={wow} alt="" className={`${styles.heroImage}`} />
      </div>
    </Section>
  )
};

export default HeroSection;