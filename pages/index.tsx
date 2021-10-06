import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main_section}>
        <h1 className={styles.title}>...wants to get paid to write software</h1>
        <h2 className={styles.subtitle}>
          Frontend, backend, and systems programming
        </h2>
        <p>
          Currently lives in Ontario, Canada 🍁. Previously in Australia 🦘 and
          Sri Lanka 🐘.
          <br />
          I am currently playing around with Rust 🦀 and web assembly.
          <br />I am familiar with languages (and frameworks):
          <ul>
            <li>
              Typescript, Javascript (NextJS, React, Redux, Node, Express),
            </li>
            <li>C++ (Qt, SDL),</li>
            <li>MongoDB, SQLite, MySQL</li>
            <li>HTML, CSS, SCSS.</li>
          </ul>
          I have <i>some</i> knowledge of Python, Lua, Bash scripting, C, and C#
          (have used these for something or the other).
          <br />
          I&apos;ve spent quite sometime with Docker and Linux operating systems
          (Arch, Fedora, Ubuntu).
          <br />
          I have a degree in Physics (LaTeX, Matlab, lots of math, computational
          physics).
          <br />
          I also took a post-graduate course in IT Business Analysis (software
          project management, software testing, requirements specification,
          enterprise software, UML, BPM, Azure, and more).
          <br />
          <br />I can make sushi 🍣
        </p>
      </div>

      <div className={styles.twin_section}>
        <div>
          <h2>Things I made</h2>
          <p>
            <ul>
              <li>
                <a href="https://github.com/merq312/cv-page">This website!</a>
              </li>
              <li>
                <a href="https://github.com/merq312/wasm-mandelbrot">
                  wasm-mandelbrot
                </a>
              </li>
              <li>
                <a href="https://github.com/merq312/qt_music_player">
                  qt-music player
                </a>
              </li>
              <li>
                <a href="https://github.com/merq312/pizza-stack">pizza-stack</a>
              </li>
              <li>
                <a href="#">cdcl (c declaration parser)</a>
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h2>
            Some more stuff I made
            <br />
            <span>(as part of tutorials or courses)</span>
          </h2>
          <p>
            <ul>
              <li>
                <a href="https://github.com/merq312/wasm-game-of-life">
                  wasm-game-of-life
                </a>
              </li>
              <li>
                <a href="">crwn clothing</a>
              </li>
              <li>
                <a href="">natours</a>
              </li>
              <li>
                <a href="">nexter</a>
              </li>
              <li>
                <a href="">c++ treeset</a>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <h1 className={styles.title}>Academic Record</h1>
      <p>Soon™️</p>
    </main>
  )
}

export default Home
