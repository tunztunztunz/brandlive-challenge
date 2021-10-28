import ReactPlayer from 'react-player/lazy'

import yellowdrip from '../../images/yellowdrip.png'
import styles from './VideoSection.module.css';
import globalStyles from '../../App.module.css';
import headerStyles from '../common/Section.module.css';
import { Section } from '../common/Section';
import colors from '../../utils/colors';


const VideoSection = () => {
  const videoLink = "https://www.youtube.com/watch?v=22jvi19akB8&ab_channel=Brandlive"
  console.log('hold video')
  return (
    <Section backgroundColor={colors.pink} backgroundImage={yellowdrip}>
      <div className={`${headerStyles.sectionHeader} ${styles.sectionHeader}`}>
          <span className={globalStyles.xs}>our product</span>
          <h2 className={globalStyles.lg}>Brandlive Greenroom 2.0</h2>
          <p>Greenroom is built to handle many events throughout any calendar month with easy collaboration tools to make sure shows happen with proper planning.</p>
      </div>
      <div className={styles.videoContainer}>
        <ReactPlayer url={videoLink} width={'100%'} height={'100%'} className={styles.reactPlayer} />
      </div>
    </Section>
  )
}

export default VideoSection;