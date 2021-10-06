import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          consectetur quis molestias pariatur itaque similique libero esse
          eveniet maxime, neque reprehenderit praesentium eum aliquid obcaecati
          explicabo distinctio veniam dolore soluta!
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          eveniet adipisci itaque ipsum vitae consequuntur voluptates eius
          deleniti doloribus temporibus excepturi rerum quo, modi, beatae,
          cumque perspiciatis eos. Eius, dicta.
        </p>
      </div>

      <div className={styles.twin_section}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, non
          quaerat explicabo, atque amet sed culpa alias architecto, vel ab
          possimus iste labore neque dolorem iusto sit fuga cum? Obcaecati!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit aperiam
          vitae vel, libero perspiciatis magni accusantium placeat, sequi saepe
          exercitationem tempore debitis dolorem quod culpa deleniti minima
          suscipit alias amet.
        </p>
      </div>
    </main>
  )
}

export default Home
