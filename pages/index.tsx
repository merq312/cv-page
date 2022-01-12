import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import Portfolio from '../components/portfolio/Portfolio.component'
import About from '../components/about/About.component'
import Education from '../components/education/Education.component'
import Card from '../components/card/Card.component'
import Marquee from '../components/marquee/Marqee.component'
import HomeCard from '../components/home-card/HomeCard-component'

const Home: NextPage = () => {
  const [tab, setTab] = useState('Home')

  const handleClick = (arg: string) => {
    setTab(arg)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Marquee />
        </div>

        {tab === 'Home' ? (
          <HomeCard handleClick={handleClick} />
        ) : tab === 'Portfolio' ? (
          <Card handleClick={handleClick}>
            <Portfolio />
          </Card>
        ) : tab === 'About' ? (
          <Card handleClick={handleClick}>
            <About />
          </Card>
        ) : (
          <Card handleClick={handleClick}>
            <Education />
          </Card>
        )}
      </main>
    </div>
  )
}

export default Home
