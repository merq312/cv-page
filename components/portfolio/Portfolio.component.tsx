import styles from './Portfolio.module.scss'
import Image from 'next/image'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import ProjectLink from '../project-link/ProjectLink.component'
import projects from './projects.json'
import moreProjects from './more-projects.json'

type AppProps = {
  bgColor: boolean
}

function Portfolio({ bgColor }: AppProps) {
  const [currentImg, setCurrentImg] = useState<string>('hover')

  return (
    <section className={styles.portfolio}>
      <div
        className={`${styles.card} ${
          bgColor ? styles.card_active : styles.card_inactive
        }`}
      >
        <div className={styles.tab}>
          <div className={styles.chevron}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <h2>Portfolio</h2>
        <div className={styles.projects_primary}>
          <ul>
            {projects.map((ea) => (
              <li key={ea.title} onMouseOver={() => setCurrentImg(ea.image)}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div className={styles.project_item}>
                  <span>{ea.title}</span>: {ea.body}
                  <ProjectLink buttonText="github" link="{ea.link}" />
                  <ProjectLink buttonText="live" link="#" />
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.img}>
            {currentImg === 'null' ? (
              <div className={styles.null_image}>
                <span>No image available</span>
              </div>
            ) : currentImg === 'hover' ? (
              <div className={styles.null_image}>
                <span>Hover project to see a preview</span>
              </div>
            ) : (
              <Image
                src={currentImg}
                width="1920"
                height="965"
                alt="project screenshot"
                priority={true}
              />
            )}
          </div>
        </div>
        <div className={styles.projects_secondary}>
          <div>Learning projects</div>
          <ul>
            {moreProjects.map((ea) => (
              <li key={ea.title}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div className={styles.project_item}>
                  <span>{ea.title}</span>: {ea.body}
                  <ProjectLink buttonText={ea.type} link={ea.source} />
                  <ProjectLink buttonText="github" link="{ea.link}" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
