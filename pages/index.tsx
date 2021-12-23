import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import Portfolio from '../components/portfolio/Portfolio.component'
import About from '../components/about/About.component'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Education from '../components/education/Education.component'

const Marquee = () => (
  <div className={styles.marquee}>
    {new Array(10).fill(0).map((ea, id) => (
      <p key={id}>Chamila Gunasena&nbsp;</p>
    ))}
  </div>
)

const MarqueeContainer = () => (
  <div className={styles.marqueeContainer}>
    {new Array(15).fill(0).map((ea, id) => (
      <Marquee key={id} />
    ))}
  </div>
)

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

const PortfolioCard = ({
  handleClick,
}: {
  handleClick: (arg0: string) => void
}) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.backButton} onClick={() => handleClick('Home')}>
        Go Back
      </div>
      <Portfolio />
    </div>
  </div>
)

const AboutCard = ({
  handleClick,
}: {
  handleClick: (arg0: string) => void
}) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.backButton} onClick={() => handleClick('Home')}>
        Go Back
      </div>
      <About />
    </div>
  </div>
)

const EducationCard = ({
  handleClick,
}: {
  handleClick: (arg0: string) => void
}) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.backButton} onClick={() => handleClick('Home')}>
        Go Back
      </div>
      <Education />
    </div>
  </div>
)

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

const Home: NextPage = () => {
  const [tab, setTab] = useState('Home')

  const handleClick = (arg: string) => {
    setTab(arg)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <MarqueeContainer />
        </div>

        {tab === 'Home' ? (
          <HomeCard handleClick={handleClick} />
        ) : tab === 'Portfolio' ? (
          <PortfolioCard handleClick={handleClick} />
        ) : tab === 'About' ? (
          <AboutCard handleClick={handleClick} />
        ) : (
          <EducationCard handleClick={handleClick} />
        )}
      </main>
    </div>
  )
}

export default Home
