import styles from './header.module.scss'
import Link from 'next/link'

const Header = () => (
  <header className={styles.header}>
    <h1>Chamila Gunasena</h1>
    <div className={styles.links}>
      <Link href="#">
        <a className={styles.link}>about</a>
      </Link>
      <Link href="#">
        <a className={styles.link}>contact</a>
      </Link>
      <Link href="https://github.com/merq312">
        <a className={styles.link}>github</a>
      </Link>
    </div>
  </header>
)

export default Header
