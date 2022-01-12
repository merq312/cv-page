import styles from '../../styles/Card.module.scss'
import Links from '../links/Links.component'

const HomeCard = ({ handleClick }: { handleClick: (arg0: string) => void }) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <h1>Hello!</h1>
      <h3>I&apos;m a fullstack web developer.</h3>
      <h3>This is my website.</h3>
      <div className={styles.pageLinks}>
        <div onClick={() => handleClick('Portfolio')}>Portfolio</div>
        <div onClick={() => handleClick('About')}>About</div>
        <div onClick={() => handleClick('Education')}>Education</div>
      </div>
      <Links />
    </div>
  </div>
)

export default HomeCard
