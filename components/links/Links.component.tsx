import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Links = () => (
  <div className={styles.userLinks}>
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
)

export default Links
