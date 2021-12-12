import styles from './Skills.module.scss'

function Skills() {
  return (
    <section className={styles.skills}>
      <h2>About</h2>

      <p>
        I started programming in 2014, writing computational physics simulations
        in C++ and Python. In 2019 I transitioned to working with web
        technologies. I specialize in Typescript, Javascript, React, and Express
        although I have worked with several other&nbsp;
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
  )
}

export default Skills
