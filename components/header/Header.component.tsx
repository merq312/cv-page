import styles from './Header.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <div>
        <FontAwesomeIcon icon={faCanadianMapleLeaf} />
      </div>
    </div>
    <div className={styles.links}>
      <Link href="https://github.com/merq312/">
        <a className={styles.link}>Github</a>
      </Link>
      <Link href="mailto:merc312@gmail.com">
        <a className={styles.link}>Email</a>
      </Link>
      <Link href="https://www.linkedin.com/in/chamila-gunasena-196a9220b/">
        <a className={styles.link}>LinkedIn</a>
      </Link>
    </div>
  </header>
)

export default Header
