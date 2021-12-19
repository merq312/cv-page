import Link from 'next/link'

type AppProps = {
  buttonText: string
  link: string
}

const ProjectLink = ({ buttonText, link }: AppProps) => (
  <Link href={link}>
    <a>
      <button>{buttonText}</button>
    </a>
  </Link>
)

export default ProjectLink
