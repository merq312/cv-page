import styles from './Education.module.scss'

function Education() {
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <div className={styles.card}>
        <div className={styles.college}>
          <span>Cambrian College</span>
          <span>Sudbury, Ontario</span>
        </div>
        <div className={styles.course}>
          IT Business Analysis Graduate Certificate
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.college}>
          <span>University of Wollongong</span>
          <span>New South Wales, Australia</span>
        </div>
        <div className={styles.course}>Bachelor of Science Physics</div>
      </div>
    </section>
  )
}

export default Education
