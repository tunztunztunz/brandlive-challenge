import { useEffect, useState } from 'react';
import Bio from './Bio';

import styles from '../PresentersSection.module.css';

import samImage from '../../../images/sam.jpg';
import thomasImage from '../../../images/thomas.jpg';
import gabiImage from '../../../images/gabi.jpg';

import samText from '../../../text/sam.json';
import thomasText from '../../../text/thomas.json';
import gabiText from '../../../text/gabi.json';
import Modal from '../../common/Modal';

// I know this component has tons of imports and passing of props. I feel like there's a better way to do this (maybe breaking this down into even smaller pieces?), but I began running out of time to be able to refactor this sections of the project.
const BioSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState({
      name: '', 
      position: '',
      bio: ''
  });

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
          {isOpen ? <Modal setIsOpen={setIsOpen} {...selectedModal} /> : null  }
        <div className={styles.bio}>
          <Bio isOpen={isOpen} setIsOpen={setIsOpen} setSelectedModal={setSelectedModal} name={samText.name} position={samText.position} bio={samText.bio} image={samImage} />
        </div>
        <div className={styles.bio}>
          <Bio isOpen={isOpen} setIsOpen={setIsOpen} setSelectedModal={setSelectedModal} name={thomasText.name} position={thomasText.position} bio={thomasText.bio} image={thomasImage} />
        </div>
        <div className={styles.bio}>
          <Bio isOpen={isOpen} setIsOpen={setIsOpen} setSelectedModal={setSelectedModal} name={gabiText.name} position={gabiText.position} bio={gabiText.bio} image={gabiImage} />
        </div> 
      </div>
  )
};

export default BioSection;