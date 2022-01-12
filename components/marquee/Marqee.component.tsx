import styles from './Marquee.module.scss'

const MarqueeInner = () => (
  <div className={styles.marquee}>
    {new Array(10).fill(0).map((ea, id) => (
      <p key={id}>Chamila Gunasena&nbsp;</p>
    ))}
  </div>
)

const Marquee = () => (
  <div className={styles.marqueeContainer}>
    {new Array(15).fill(0).map((ea, id) => (
      <MarqueeInner key={id} />
    ))}
  </div>
)

export default Marquee
