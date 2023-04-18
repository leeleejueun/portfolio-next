import React from 'react'
import styles from '@/styles/works.module.scss'
import Header from './component/Header'
import Link from 'next/link'

const Works = () => {
  return (
    <>
      <Header />
      <section className={styles.works}>
        <p className={styles.text}>2022 - 2023</p>
        <div className={styles.menu}>
          <div className={`${styles.dplanex} ${styles.work}`}>
            <Link href="/WorkDetail">
              <p className={styles.detail}>CLONE CODING / VANILLA JS</p>
              <p className={styles.title}>
                DPLANEX
                <img src="/img/works/dplanex.png" className={styles.image}/>
              </p>
            </Link>
          </div>
          <div className={`${styles.travello} ${styles.work}`}>
            <Link href="/WorkDetail">
              <p className={styles.detail}>UX DESIGN / UI DESIGN / VANILLA JAVASCRIPT</p>
              <p className={styles.title}>
                TRAVELLO
                <img src="/img/works/travello.png" className={styles.image} />
              </p>
            </Link>
          </div>
          <div className={`${styles.puppy} ${styles.work}`}>
            <Link href="/WorkDetail">
              <p className={styles.detail}>UX DESIGN / UI DESIGN / REACT</p>
              <p className={styles.title}>
                PUPPY
                <img src="/img/works/puppy.png" className={styles.image} />
              </p>
            </Link>
          </div>
          <div className={`${styles.bbubbu} ${styles.work}`}>
            <Link href="/WorkDetail">
              <p className={styles.detail}>UX DESIGN / UI DESIGN / NEXT JS</p>
              <p className={styles.title}>
                BBU BBU
                <img src="/img/works/bbubbu.png" className={styles.image} />
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Works