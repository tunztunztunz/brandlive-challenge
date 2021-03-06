import { SectionInterface } from "../../interfaces/SectionsInterface"
import styles from './Section.module.css';

const Section = ({backgroundImage, backgroundColor, children, className}: SectionInterface) => {
  
  return (
    <section style={{
      backgroundImage: `${backgroundImage ? `url(${backgroundImage})` : ''}`,
      backgroundColor: backgroundColor
    }}
    className={`${className} ${styles.section}`}
    >
      {children}
    </section>
  )
};

export default Section;