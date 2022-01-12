import { ReactNode } from 'react'
import styles from '../../styles/Card.module.scss'

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
        Go Back
      </div>
      {children}
    </div>
  </div>
)

export default Card
