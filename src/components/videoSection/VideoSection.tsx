import ReactPlayer from 'react-player/lazy';
import Section from '../common/Section';
import colors from '../../utils/colors';
import styles from './VideoSection.module.css';
import globalStyles from '../../App.module.css';
import headerStyles from '../common/Section.module.css';
import yellowdrip from '../../images/yellowdrip.png';
import text from '../../text/video.json';


const VideoSection = () => {
  const videoLink = "https://www.youtube.com/watch?v=22jvi19akB8&ab_channel=Brandlive";
  
  return (
    <Section backgroundColor={colors.pink} backgroundImage={yellowdrip}>
      <div className={`${headerStyles.sectionHeader} ${styles.sectionHeader}`}>
          <span className={globalStyles.xs}>{text.kicker}</span>
          <h2 className={globalStyles.lg}>{text.header}</h2>
          <p>{text.mainCopy}</p>
      </div>
      <div className={styles.videoContainer}>
        <ReactPlayer url={videoLink} width={'100%'} height={'100%'} className={styles.reactPlayer} />
      </div>
    </Section>
  )
}

export default VideoSection;