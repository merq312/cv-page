import { ReactNode } from 'react'
import styles from '../../styles/Card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const Card = ({
  children,
  handleClick,
}: {
  handleClick: (arg0: string) => void
  children: ReactNode
}) => (
  <div className={styles.card}>
    <div className={styles.content}>
      <div className={styles.backButton} onClick={() => handleClick('Home')}>
        <FontAwesomeIcon className={styles.icon} icon={faLongArrowAltLeft} />
        Go Back
      </div>
      {children}
    </div>
  </div>
)

export default Card
