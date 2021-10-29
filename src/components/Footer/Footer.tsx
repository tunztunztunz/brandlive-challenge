import Section from "../Common/Section";
import colors from "../../utils/colors";
import styles from './Footer.module.css';
import globalStyles from '../../App.module.css';
import brandlive from '../../images/brandlive.png';
import streaming from '../../images/streaming.png';

const Footer = () => {
  return (
    <footer>
      <Section backgroundColor={colors.blueSecondary}>
        <div className={styles.footerContainer}>
          <div>
          <img src={brandlive} alt="brandlive logo" />
          </div>
          <div className={styles.terms}>
            <span className={globalStyles.xs}>terms and conditions</span>
            <span className={globalStyles.xs}>privacy policy</span>
          </div>
          <div>
          <img src={streaming} alt="brandlive streaming logo" />
          </div>
        </div>
      </Section>
    </footer>
  )
};

export default Footer;