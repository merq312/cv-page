import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <h1>Contact</h1>
      <ul>
        <li>Email</li>
        <li>LinkedIn</li>
      </ul>
    </div>
    <div className={styles.vert_line}>&nbsp;</div>
    <div className={styles.content}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptas,
      eos, minus suscipit sit magnam, velit aliquam maiores non tempore
      assumenda quo officia! Eligendi tempore minima in enim porro nobis.
    </div>
  </footer>
)

export default Footer
