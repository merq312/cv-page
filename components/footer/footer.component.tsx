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
    <div className={styles.content}>©️ Chamila Gunasena 2021</div>
  </footer>
)

export default Footer
