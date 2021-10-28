import truncate from '../../../utils/truncate';
import BioInterface from '../../../interfaces/BioInterface';
import styles from '../Presenters.module.css';

const Bio = ({image, name, position, bio, setIsOpen, isOpen, setSelectedModal}: BioInterface) => {
  const truncatedBio = truncate(bio);

  // Check to see if the modal is open. If it is not, it will set the parent state with the data here so the modal information reflects which Bio component the user selects.
  const handleModal = () => {
    if (!isOpen) {
      setSelectedModal({
        name: name, 
        position: position,
        bio: bio
      })
    }
    setIsOpen(true)
  }

  return (
    <div className={styles.bio}>
        <img src={image} alt={name} onClick={() => handleModal()} />
        <h3>{name}</h3>
        <h4>{position}</h4>
        <p>{truncatedBio}</p>
    </div>
  )
}

export default Bio;