import styles from './header.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <span>Ontario</span>
      <div>
        <FontAwesomeIcon icon={faCanadianMapleLeaf} />
      </div>
      <span>Canada</span>
    </div>
    <div className={styles.links}>
      <Link href="#">
        <a className={styles.link}>Github</a>
      </Link>
      <Link href="#">
        <a className={styles.link}>Email</a>
      </Link>
      <Link href="#">
        <a className={styles.link}>LinkedIn</a>
      </Link>
    </div>
  </header>
)

export default Header
