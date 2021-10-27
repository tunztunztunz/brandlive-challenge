import styles from '../Presenters.module.css';
// Use json files with text so they are easily retrievable. 
const Bio = (image: string) => {
  return (
    <div className={styles.bio}>
          <img src={image} alt="sam kolbert" />
          <h3>Thomas Iwasaki </h3>
          <h4>Chief Product Officer</h4>
          <p>Thomas expertly leads all marketing and communication efforts, as well as the produ...</p>
        </div>
  )
}

export default Bio;