import BioInterface from '../../../interfaces/BioInterface';
import styles from '../PresentersSection.module.css';
import truncate from '../../../utils/truncate';

const Bio = ({image, name, position, bio, setIsOpen, isOpen, setSelectedModal}: BioInterface) => {
  const truncatedBio = truncate(bio);

  // Check to see if the modal is open. If it is not, it will set the parent state with the data here so the modal information reflects which Bio component the user selects. If this were a larger componen, I may consider extracting this into it's own file in utils to cut down on clutter.
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
};

export default Bio;