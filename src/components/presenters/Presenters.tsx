import colors from "../../utils/colors";
import { Section } from "../common/Section";
import yellowdrip from '../../images/bluedrip.png'
import globalStyles from '../../App.module.css';
import headerStyles from '../common/Section.module.css';
import styles from './Presenters.module.css';
import BioSection from "./biosSection/BioSection";


const Presenters = () => {
  return (
    <Section backgroundColor={colors.yellow} backgroundImage={yellowdrip} className={styles.presentersContainer}>
      <div className={headerStyles.sectionHeader}>
        <span className={globalStyles.xs}>our speakers</span>
        <h2 className={globalStyles.lg}>Meet Your Event Experts</h2>
        <p>Brandlive's line-up of creative leaders are here to help make your biggest event dreams become a reality.</p>
      </div>
      <BioSection/>
    </Section>
  )
}

export default Presenters;