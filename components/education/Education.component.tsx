import styles from './Education.module.scss'

function Education() {
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <div className={styles.card}>
        <span>IT Business Analysis Graduate Certificate</span>
        <span>Cambrian College</span>
        <span>President&apos;s Honor Roll</span>
        <span>Sudbury, Ontario</span>
      </div>
      <div className={styles.card}>
        <span>Bachelor of Science Physics</span>
        <span>University of Wollongong</span>
        <span>
          Internship at Institute for Superconducting & Electronic Materials
          (ISEM)
        </span>
        <span>New South Wales, Australia</span>
      </div>
    </section>
  )
}

export default Education
