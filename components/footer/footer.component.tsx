import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <h1 id="contact">Contact</h1>
      <ul>
        <li>
          <a href="mailto:merc312@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chamila-gunasena-196a9220b/">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
    <div className={styles.vert_line}>&nbsp;</div>
    <div className={styles.content}>
      Lorem i eos, minus suscipit sit magnam, velit aliquam maiores non tempore
      assumenda quo officia! Eligendi tempore minima in enim porro nobis.
    </div>
  </footer>
)

export default Footer
