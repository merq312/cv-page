import styles from './Skills.module.scss'

function Skills() {
  return (
    <section className={styles.skills}>
      <h2>About</h2>

      <p>
        While I am now a web developer, I started programming in 2014, writing
        computational physics simulations in C++ and Python. In 2019 I
        transitioned to working with web technologies &#8212; building modern
        web applications and APIs. As you might find from my portfolio, I have
        been dabbling in WebSockets and WebAssembly recently.
      </p>
      <p>
        I specialize in Typescript, Javascript, React, and Express although I
        have worked with several other languages and frameworks. I am familiar
        with many of the commonly used Javascript libraries and the tools of the
        trade (git, bash, npm, and so on.).
      </p>
      <p>
        I have some experience with pair/mob programming, agile development, the
        software development life cycle, business process re-engineering, and
        software project management.
      </p>
      <p>
        I am a long term Linux user and I am quite comfortable with using and
        maintaining a Linux distro (such as Arch, Fedora or Ubuntu).
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
  )
}

export default Skills
