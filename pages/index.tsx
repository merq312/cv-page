import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <section>
        Pre-main
      </section>

      <section>
        Main
      </section>

      {/*<div className={styles.main_section}>*/}
      {/*  <h1 className={styles.title}>...wants to get paid to write software</h1>*/}
      {/*  <h2 className={styles.subtitle}>*/}
      {/*    Frontend, backend, and systems programming*/}
      {/*  </h2>*/}
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
      {/*    <p>*/}
      {/*      <ul>*/}
      {/*        <li>*/}
      {/*          <a href="https://github.com/merq312/cv-page">*/}
      {/*            <span>This website</span>: made on NextJS, with Typescript and*/}
      {/*            SCSS.*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="https://github.com/merq312/wasm-mandelbrot">*/}
      {/*            <span>wasm-mandelbrot</span>: A Mandelbrot fractal generator*/}
      {/*            that runs on your browser. Using rust+wasm.*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="https://github.com/merq312/qt_music_player">*/}
      {/*            <span>qt-music player</span>: Desktop music player written in*/}
      {/*            C++/Qt/SQLite. Stores yours music library metadata (artists,*/}
      {/*            albums, album art, etc.), album art view, drag and drop*/}
      {/*            playlists.*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="https://github.com/merq312/pizza-stack">*/}
      {/*            <span>pizza-stack</span>: Website for a fictional store. Made*/}
      {/*            on NextJS with Redux for state management and Magic Auth for*/}
      {/*            authentication.*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="https://github.com/merq312/cdecl">*/}
      {/*            <span>cdecl</span>: C declaration parser that runs on the*/}
      {/*            terminal*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="https://github.com/merq312/treeset">*/}
      {/*            <span>C++ treeset</span>: Binary tree library using smart*/}
      {/*            pointers*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </p>*/}
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
    </main>
  )
}

export default Home

// TODO
// Put something in the footer
