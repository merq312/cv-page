import Link from 'next/link'
import styles from './ProjectLink.module.scss'

type AppProps = {
  buttonText: string
  link: string
}

const ProjectLink = ({ buttonText, link }: AppProps) => (
  <Link href={link}>
    <a>
      <button
        className={`${styles.buttonLink} ${
          buttonText === 'live'
            ? styles.buttonLink_live
            : buttonText === 'course' || buttonText === 'book'
            ? styles.buttonLink_course
            : styles.buttonLink_github
        }`}
      >
        {buttonText}
      </button>
    </a>
  </Link>
)

export default ProjectLink
