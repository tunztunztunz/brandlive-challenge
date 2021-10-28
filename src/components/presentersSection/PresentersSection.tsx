import colors from "../../utils/colors";
import { Section } from "../common/Section";
import yellowdrip from '../../images/bluedrip.png'
import globalStyles from '../../App.module.css';
import headerStyles from '../common/Section.module.css';
import styles from './PresentersSection.module.css';
import BioSection from "./biosSection/BioSection";

import text from '../../text/presenters.json';

const Presenters = () => {
  return (
    <Section backgroundColor={colors.yellow} backgroundImage={yellowdrip} className={styles.presentersContainer}>
      <div className={headerStyles.sectionHeader}>
        <span className={globalStyles.xs}>{text.kicker}</span>
        <h2 className={globalStyles.lg}>{text.header}</h2>
        <p>{text.mainCopy}</p>
      </div>
      <BioSection/>
    </Section>
  )
}

export default Presenters;