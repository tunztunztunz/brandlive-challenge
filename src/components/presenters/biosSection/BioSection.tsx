import styles from '../Presenters.module.css';

import sam from '../../../images/sam.jpg'
import thomas from '../../../images/thomas.jpg'
import gabi from '../../../images/gabi.jpg'

const BioSection = () => {

  return (
    <div className={styles.biosContainer}>
        <div className={styles.bio}>
          <img src={sam} alt="sam kolbert" />
          <h3>Sam Kolbert-Hyle</h3>
          <h4>President & CEO of Brandlive</h4>
          <p>Under Sam's leadership, Brandlive was recognized by Fast Company as thr #1 most...</p>
        </div>
        <div className={styles.bio}>
          <img src={thomas} alt="sam kolbert" />
          <h3>Thomas Iwasaki </h3>
          <h4>Chief Product Officer</h4>
          <p>Thomas expertly leads all marketing and communication efforts, as well as the produ...</p>
        </div>
        <div className={styles.bio}>
          <img src={gabi} alt="sam kolbert" />
          <h3>Sam Kolbert-Hyle</h3>
          <h4>Product Marketing Manager</h4>
          <p>FPO</p>
        </div>
      </div>
  )
}

export default BioSection