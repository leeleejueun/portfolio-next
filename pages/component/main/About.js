import React from 'react'
import styles from '@/styles/main.module.scss'
import Link from 'next/link'

const about = () => {
  return (
    <section className={styles.about}>
      <div className={styles.top}>
        <h2>GOOD TO SEE  YOU!</h2>
        <Link href="/About">LEARN MORE</Link>
      </div>
      <div className={styles.middle}>
        <img src='/img/main/face.png'/>
        <h2>LET ME TELL YOU</h2>
      </div>
      <div className={styles.bottom}>
        <h2>ABOUT ME</h2>
      </div>
    </section>
  )
}

export default about