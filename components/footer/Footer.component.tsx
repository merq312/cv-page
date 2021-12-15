import styles from './Footer.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <Link href="https://github.com/merq312/">
        <a className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>
      </Link>
      <Link href="mailto:merc312@gmail.com">
        <a className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/chamila-gunasena-196a9220b/">
        <a className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
        </a>
      </Link>
    </div>
    <div className={styles.copyright}>
      <div className={styles.line} />
      <FontAwesomeIcon className={styles.icon} icon={faCopyright} />
      <span>Chamila Gunasena 2021</span>
      <div className={styles.line} />
    </div>
  </footer>
)

export default Footer
