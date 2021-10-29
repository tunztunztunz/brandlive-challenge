import Section from "../Common/Section";
import ImageRow from "./ImageRow";
import colors from "../../utils/colors";
import globalStyles from '../../App.module.css';
import headerStyles from '../Common/Section.module.css';
import styles from './CustomersSection.module.css';
import pinkdrip from '../../images/pinkdrip.png';
import text from '../../text/customer.json';

const CustomersSection = () => {
  return (
    <Section backgroundColor={colors.pink} backgroundImage={pinkdrip}>
      <div className={`${headerStyles.sectionHeader} ${styles.customSection}`}>
          <span className={globalStyles.xs}>{text.kicker}</span>
          <h2 className={globalStyles.lg}>{text.header}</h2>
      </div>
      <ImageRow/>
    </Section>
  )
}

export default CustomersSection