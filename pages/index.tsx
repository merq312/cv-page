import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Portfolio from '../components/portfolio/Portfolio.component'
import Skills from '../components/skills/Skills.component'
import Education from '../components/education/Education.component'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [availHeight, setAvailHeight] = useState(0)
  const [portfolioColor, setPortfolioColor] = useState(false)

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    setAvailHeight(window.screen.availHeight)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollPosition > availHeight / 3) {
      setPortfolioColor(true)
    } else {
      setPortfolioColor(false)
    }
  }, [availHeight, scrollPosition])

  return (
    <>
      <section className={styles.pre_main}>
        <div>
          <h1>Chamila Gunasena</h1>
          <span>Fullstack web developer</span>
        </div>
      </section>

      <Portfolio bgColor={portfolioColor} />

      <section className={styles.main}>
        <Skills />
        <Education />
      </section>
    </>
  )
}

export default Home
