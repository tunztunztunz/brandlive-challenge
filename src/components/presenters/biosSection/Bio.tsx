import truncate from '../../../utils/truncate';
import BioInterface from '../../../interfaces/BioInterface';
import styles from '../Presenters.module.css';

const Bio = ({image, name, position, bio, setIsOpen}: BioInterface) => {
  const truncatedBio = truncate(bio);
  return (
    <div className={styles.bio}>
          <img src={image} alt={name} onClick={() => setIsOpen(true)} />
          <h3>{name}</h3>
          <h4>{position}</h4>
          <p>{truncatedBio}</p>
        </div>
  )
}

export default Bio;