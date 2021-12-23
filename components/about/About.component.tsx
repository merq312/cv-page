import styles from './About.module.scss'
import CustomListComponent from '../custom-list/CustomList.component'

function About() {
  return (
    <section className={styles.about}>
      <h2>About</h2>

      <p>
        While I am now a web developer, I started programming in 2014, writing
        computational physics simulations in C++ and Python. In 2019 I
        transitioned to working with web technologies, building modern web
        applications and APIs.
      </p>
      <p>
        I specialize in Typescript, Javascript, React, and Express, although I
        have worked with several other languages and frameworks. My forte is
        certainly the front-end, and I have a lot of experience with Redux and
        almost all of the popular CSS frameworks.
      </p>
      <p>
        Recently, I have been learning how to take a test-driven approach when
        it comes to building web applications with Jest, Cypress, and the React
        testing libraries. I was fortunate enough to experience{' '}
        <a href="https://medium.com/@michellegmacrae/mob-programming-101-551a91292ba4">
          mob programming
        </a>{' '}
        with other developers, and it has helped me grow into a better
        developer.
      </p>
      <p>
        Despite being self-taught, I have a decent grasp of computer science
        concepts. While I don&apos;t actively use it for anything, I&apos;ve
        spent quite some time learning C &#8212; I&apos;ve read{' '}
        <a href="https://en.wikipedia.org/wiki/The_C_Programming_Language">
          K&R C
        </a>{' '}
        and{' '}
        <a href="https://www.amazon.ca/Expert-Programming-Peter-van-Linden/dp/0131774298">
          Deep C Secrets
        </a>{' '}
        from cover to cover. I&apos;ve also read{' '}
        <a href="https://www.amazon.com/Tour-2nd-Depth-Bjarne-Stroustrup/dp/0134997832">
          Tour of C++
        </a>
        ,{' '}
        <a href="https://www.oreilly.com/library/view/effective-c-55/0321334876/">
          Effective C++
        </a>
        , and{' '}
        <a href="https://www.oreilly.com/library/view/effective-modern-c/9781491908419/">
          Effective Modern C++
        </a>
        . Recently, I&apos;ve picked up Rust, and I&apos;ve been using it to
        generate WebAssembly.
      </p>
      <p>
        There are a lot of things I still want to learn, such as working with
        video streaming, Vue, and more Rust, but for now, I&apos;m actively
        looking for employment as a web developer.
      </p>

      <h3>Web frameworks</h3>
      <div className={styles.list_container}>
        <CustomListComponent
          items={[
            'React',
            'Redux',
            'Next.js',
            'Tailwindcss',
            'Styled-Components',
          ]}
        />
        <CustomListComponent
          items={['Prisma ORM', 'Mongoose', 'Socket.io', 'Auth0']}
        />
      </div>

      <h3>Other skills</h3>

      <div className={styles.list_container}>
        <CustomListComponent items={['C++ (Qt, SDL)', 'Rust (Web Assembly)']} />
        <CustomListComponent items={['Postgres, MongoDB, SQLite', 'Docker']} />
      </div>
    </section>
  )
}

export default About
