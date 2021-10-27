import { Section } from "../common/Section";

import globalStyles from '../../App.module.css';
import headerStyles from '../common/Section.module.css';
import colors from "../../utils/colors";

import pinkdrip from '../../images/pinkdrip.png';
import ImageRow from "./ImageRow";

const SponsorsSection = () => {
  console.log('sponsors')
  return (
    <Section backgroundColor={colors.blueSecondary} backgroundImage={pinkdrip}>
      <div className={headerStyles.sectionHeader}>
          <span className={globalStyles.xs}>our happy customers</span>
          <h2 className={globalStyles.lg}>Words That Make Us Blush</h2>
      </div>
      <ImageRow/>
    </Section>
  )
}

export default SponsorsSection