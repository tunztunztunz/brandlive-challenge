import { useEffect, useState } from 'react';
import Bio from './Bio';

import styles from '../Presenters.module.css';

import samImage from '../../../images/sam.jpg';
import thomasImage from '../../../images/thomas.jpg';
import gabiImage from '../../../images/gabi.jpg';

import samText from '../../../text/sam.json';
import thomasText from '../../../text/thomas.json';
import gabiText from '../../../text/gabi.json';
import Modal from '../../common/Modal';

const BioSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Run checks to see if modal is open. If it is, then lock scroll. Otherwise, unlock scroll.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])

  return (
    <div className={styles.biosContainer}>
        <div className={styles.bio}>
          {isOpen && <Modal setIsOpen={setIsOpen} name={samText.name} position={samText.position} bio={samText.bio} />}
          <Bio setIsOpen={setIsOpen} name={samText.name} position={samText.position} bio={samText.bio} image={samImage} />
        </div>
        <div className={styles.bio}>
          {isOpen && <Modal setIsOpen={setIsOpen} name={thomasText.name} position={thomasText.position} bio={thomasText.bio} />}
          <Bio setIsOpen={setIsOpen} name={thomasText.name} position={thomasText.position} bio={thomasText.bio} image={thomasImage} />
        </div>
        <div className={styles.bio}>
          {isOpen && <Modal setIsOpen={setIsOpen} name={gabiText.name} position={gabiText.position} bio={gabiText.bio} />}
          <Bio setIsOpen={setIsOpen} name={gabiText.name} position={gabiText.position} bio={gabiText.bio} image={gabiImage} />
        </div> 
      </div>
  )
}

export default BioSection