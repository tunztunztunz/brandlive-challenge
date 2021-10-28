import ModalInterface from '../../interfaces/ModalInterface';
import styles from './Modal.module.css';

const Modal = ({ setIsOpen, name, position, bio }: ModalInterface) => {
  
  return (
    <>
    <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
    <div className={styles.centered}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</button>
        <div className={styles.modalContent}>
          <h4>{name}</h4>
          <h5>{position}</h5>
          <p>{bio}</p>
        </div>
      </div>
    </div>
    </>
  )
};

export default Modal;