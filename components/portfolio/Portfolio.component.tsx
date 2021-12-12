import styles from './Portfolio.module.scss'

function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.card}>
        <h2>Portfolio</h2>
        <div className={styles.projects_primary}>
          <ul>
            <li>
              <a href="https://github.com/merq312/inventory-fullstack">
                <span>Inventory tracker</span>: A full-stack product tracking
                solution for a company I worked for. Designed as a React webapp
                with a REST API backend using Express and Postgres. Styled using
                MaterialUI.
              </a>
            </li>
            <li>
              <a href="https://github.com/merq312/instant-messenger">
                <span>Transmitter</span>: An instant messenger. User and guest
                accounts, private chatrooms, and more. Uses Socket.IO for
                websockets. React, Redux, TailwindCss, Express.
              </a>
            </li>
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
                <span>Qt Music Player</span>: Desktop music player written in
                C++/Qt/SQLite. Stores yours music library metadata (artists,
                albums, album art, etc.), album art view, drag and drop
                playlists.
              </a>
            </li>
            <li>
              <a href="https://github.com/merq312/pizza-stack">
                <span>pizza-stack</span>: Website for a fictional store. Made on
                NextJS with Redux for state management and Magic Auth for
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
          <div className={styles.img}>IMAGE</div>
        </div>
        <div className={styles.projects_secondary}>
          <div>More projects</div>

          <ul>
            <li>
              <a href="https://github.com/merq312/wasm-game-of-life">
                <span>wasm-game-of-life</span>: Conway&apos;s game of life that
                runs on your browser. Using rust+wasm.
              </a>
              <a
                className={styles.src_link}
                href="https://rustwasm.github.io/docs/book/introduction.html"
              >
                {' '}
                book
              </a>
            </li>
            <li>
              <a href="https://crwn-live-merc312.herokuapp.com/">
                <span>Crwn Clothing</span>: Fictional store website. Made with
                React, Redux, Firebase
              </a>
              <a
                className={styles.src_link}
                href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
              >
                {' '}
                course
              </a>
            </li>
            <li>
              <a href="https://github.com/merq312/natours-app">
                <span>Natours</span>: Part of a Node backend course. NodeJS,
                Express, MongoDB, implements a REST API
              </a>
              <a
                className={styles.src_link}
                href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
              >
                {' '}
                course
              </a>
            </li>
            <li>
              <a href="https://merq312.github.io/fuzzy-disco/">
                <span>Nexter</span>: Learning SCSS, CSS (Grid and Flexbox)
              </a>
              <a
                className={styles.src_link}
                href="https://www.udemy.com/course/advanced-css-and-sass/"
              >
                {' '}
                course
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
