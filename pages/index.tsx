import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.pre_main}>
        <div>
          <h1>Chamila Gunasena</h1>
          <span>Fullstack web developer</span>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className={styles.card}>
          <h2>Portfolio</h2>
          <div>
            <ul>
              <li>
                <a href="https://github.com/merq312/cv-page">
                  <span>This website</span>: made on NextJS, with Typescript and
                  SCSS.
                </a>
              </li>
              <li>
                <a href="https://github.com/merq312/wasm-mandelbrot">
                  <span>wasm-mandelbrot</span>: A Mandelbrot fractal generator
                  that runs on your browser. Using rust+wasm.
                </a>
              </li>
              <li>
                <a href="https://github.com/merq312/qt_music_player">
                  <span>qt-music player</span>: Desktop music player written in
                  C++/Qt/SQLite. Stores yours music library metadata (artists,
                  albums, album art, etc.), album art view, drag and drop
                  playlists.
                </a>
              </li>
              <li>
                <a href="https://github.com/merq312/pizza-stack">
                  <span>pizza-stack</span>: Website for a fictional store. Made
                  on NextJS with Redux for state management and Magic Auth for
                  authentication.
                </a>
              </li>
              <li>
                <a href="https://github.com/merq312/cdecl">
                  <span>cdecl</span>: C declaration parser that runs on the
                  terminal
                </a>
              </li>
              <li>
                <a href="https://github.com/merq312/treeset">
                  <span>C++ treeset</span>: Binary tree library using smart
                  pointers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.main}>
        <section className={styles.skills}>
          <h2>About</h2>

          <p>
            I started programming in 2014, writing computational physics
            simulations in C++ and Python. In 2019 I transitioned to working
            with web technologies. I specialize in Typescript, Javascript,
            React, and Express although I have worked with several other&nbsp;
            <a href="#">languages and frameworks.</a>
          </p>

          <h3>Web frameworks</h3>
          <div>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>Next.js</li>
              <li>Tailwindcss</li>
            </ul>
            <ul>
              <li>Styled-Components</li>
              <li>Prisma ORM</li>
              <li>Mongoose</li>
              <li>Socket.io</li>
              <li>Auth0</li>
            </ul>
          </div>

          <h3>Other skills</h3>

          <div>
            <ul>
              <li>C++ (Qt, SDL)</li>
              <li>Rust (Web Assembly)</li>
            </ul>
            <ul>
              <li>Postgres, MongoDB, SQLite</li>
              <li>Docker</li>
            </ul>
          </div>
        </section>

        <section className={styles.education}>
          <h2>Education</h2>
          <div className={styles.card}>
            <div className={styles.college}>
              <span>Cambrian College</span>
              <span>Sudbury, Ontario</span>
            </div>
            <div className={styles.course}>
              IT Business Analysis Graduate Certificate
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.college}>
              <span>University of Wollongong</span>
              <span>New South Wales, Australia</span>
            </div>
            <div className={styles.course}>Bachelor of Science Physics</div>
          </div>
        </section>
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
