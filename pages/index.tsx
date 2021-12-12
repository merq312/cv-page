import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Portfolio from '../components/portfolio/Portfolio.component'
import Skills from '../components/skills/Skills.component'
import Education from '../components/education/Education.component'

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.pre_main}>
        <div>
          <h1>Chamila Gunasena</h1>
          <span>Fullstack web developer</span>
        </div>
      </section>

      <Portfolio />

      <section className={styles.main}>
        <Skills />
        <Education />
      </section>

      {/*<div className={styles.main_section}>*/}
      {/*  <p>*/}
      {/*    Currently lives in Ontario, Canada 🍁. Previously in Australia 🦘 and*/}
      {/*    Sri Lanka 🐘.*/}
      {/*    <br />*/}
      {/*    I am currently playing around with Rust 🦀 and web assembly.*/}
      {/*    <br />I am familiar with languages (and frameworks):*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        Typescript, Javascript (NextJS, React, Redux, Node, Express),*/}
      {/*      </li>*/}
      {/*      <li>C++ (Qt, SDL),</li>*/}
      {/*      <li>MongoDB, SQLite, MySQL,</li>*/}
      {/*      <li>HTML, CSS, SCSS.</li>*/}
      {/*    </ul>*/}
      {/*    I have <i>some</i> knowledge of Python, Lua, Bash scripting, C, and C#*/}
      {/*    (have used these for something or the other).*/}
      {/*    <br />*/}
      {/*    I&apos;ve spent quite sometime with Docker and Linux operating systems*/}
      {/*    (Arch, Fedora, Ubuntu).*/}
      {/*    <br />*/}
      {/*    I have a degree in Physics (LaTeX, Matlab, lots of math, computational*/}
      {/*    physics).*/}
      {/*    <br />*/}
      {/*    I also took a post-graduate course in IT Business Analysis (software*/}
      {/*    project management, software testing, requirements specification,*/}
      {/*    enterprise software, UML, BPM, Azure, and more).*/}
      {/*    <br />*/}
      {/*    <br />I can make sushi 🍣*/}
      {/*  </p>*/}
      {/*</div>*/}

      {/*<div className={styles.twin_section}>*/}
      {/*  <div>*/}
      {/*    <h2>Things I made</h2>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <h2>*/}
      {/*      Some more stuff I made*/}
      {/*      <br />*/}
      {/*      <span>(as part of tutorials or courses)</span>*/}
      {/*    </h2>*/}
      {/*    <p>*/}
      {/*      <ul>*/}
      {/*        <li>*/}
      {/*          <a href="https://github.com/merq312/wasm-game-of-life">*/}
      {/*            <span>wasm-game-of-life</span>: Conway&apos;s game of life*/}
      {/*            that runs on your browser. Using rust+wasm.*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            className={styles.src_link}*/}
      {/*            href="https://rustwasm.github.io/docs/book/introduction.html"*/}
      {/*          >*/}
      {/*            {' '}*/}
      {/*            book*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="https://crwn-live-merc312.herokuapp.com/">*/}
      {/*            <span>Crwn Clothing</span>: Fictional store website. Made with*/}
      {/*            React, Redux, Firebase*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            className={styles.src_link}*/}
      {/*            href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"*/}
      {/*          >*/}
      {/*            {' '}*/}
      {/*            course*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="https://github.com/merq312/natours-app">*/}
      {/*            <span>Natours</span>: Part of a Node backend course. NodeJS,*/}
      {/*            Express, MongoDB, implements a REST API*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            className={styles.src_link}*/}
      {/*            href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"*/}
      {/*          >*/}
      {/*            {' '}*/}
      {/*            course*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="https://merq312.github.io/fuzzy-disco/">*/}
      {/*            <span>Nexter</span>: Learning SCSS, CSS (Grid and Flexbox)*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            className={styles.src_link}*/}
      {/*            href="https://www.udemy.com/course/advanced-css-and-sass/"*/}
      {/*          >*/}
      {/*            {' '}*/}
      {/*            course*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className={styles.academic_section}>*/}
      {/*  <h1 className={styles.title}>Academic Record</h1>*/}
      {/*  <div className={styles.list_item}>*/}
      {/*    <div className={styles.course}>*/}
      {/*      IT Business Analysis Graduate Certificate*/}
      {/*    </div>*/}
      {/*    <div className={styles.college}>Cambrian College</div>*/}
      {/*    <div className={styles.highlights}>President&apos;s Honor Roll</div>*/}
      {/*  </div>*/}
      {/*  <div className={styles.list_item}>*/}
      {/*    <div className={styles.course}>Bachelor of Science (Physics)</div>*/}
      {/*    <div className={styles.college}>University of Wollongong</div>*/}
      {/*    <div className={styles.highlights}>*/}
      {/*      Internship at Institute for Superconducting & Electronic Materials*/}
      {/*      (ISEM)*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}

export default Home
