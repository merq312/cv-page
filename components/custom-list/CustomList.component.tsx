import React from 'react'
import styles from './CustomList.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

type AppProps = {
  items: Array<string>
}

const CustomListComponent = ({ items }: AppProps) => (
  <ul className={styles.list}>
    {items.map((ea) => (
      <li key={ea}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        {ea}
      </li>
    ))}
  </ul>
)

export default CustomListComponent
