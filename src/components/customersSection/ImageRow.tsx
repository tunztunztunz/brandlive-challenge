import styles from './CustomersSection.module.css';
import adidas from '../../images/adidas.png';
import herbalife from '../../images/herbalife.png';
import levis from '../../images/levis.png';
import kohler from '../../images/kohler.png';
import gopro from '../../images/gopro.png';
import meredith from '../../images/meredith.png';

const ImageRow = () => {
  return (
    <div className={styles.imageRow}>
        <img src={adidas} alt="Adidas logo" />
        <img src={herbalife} alt="herbalife logo" />
        <img src={levis} alt="levis logo" />
        <img src={kohler} alt="kohler logo" />
        <img src={gopro} alt="gopro logo" />
        <img src={meredith} alt="meredith logo" />
      </div>
  )
}

export default ImageRow;