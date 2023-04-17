import React from 'react'
import styles from '@/styles/main.module.scss'

const works = () => {
  return (
    <>
        <section className={styles.works}>
            <h2 className={styles.top}>PARTICIPATED</h2>
            <div className={styles.year}>
                <p>2022</p>
                <span></span>
                <p>2023</p>
            </div>
            <h2 className={styles.bottom}>WORKS</h2>
        </section>
        <section className={`${styles.dplanex} ${styles.work}`}>
            <div className={styles.top}>
                <p>01</p>
                <span></span>
                <p>04</p>
            </div>
            <div className={styles.middle}>
                01
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>
                    <p>CLONE CODING / VANILLA JS</p>
                    <h3>DPLANEX</h3>
                </div>
                <img src='/img/main/dplanex.png' />
            </div>
        </section>
        <section className={`${styles.travello} ${styles.work}`}>
            <div className={styles.top}>
                <p>02</p>
                <span></span>
                <p>04</p>
            </div>
            <div className={styles.middle}>
                02
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>
                    <p>UX DESIGN / UI DESIGN / VANILLA JS</p>
                    <h3>TRAVELLO</h3>
                </div>
                <img src='/img/main/travello.png' />
            </div>
        </section>
        <section className={`${styles.puppy} ${styles.work}`}>
            <div className={styles.top}>
                <p>03</p>
                <span></span>
                <p>04</p>
            </div>
            <div className={styles.middle}>
                03
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>
                    <p>UX DESIGN / UI DESIGN / REACT</p>
                    <h3>PUPPY</h3>
                </div>
                <img src='/img/main/puppy.png' />
            </div>
        </section>
        <section className={`${styles.bbubbu} ${styles.work}`}>
            <div className={styles.top}>
                <p>04</p>
                <span></span>
                <p>04</p>
            </div>
            <div className={styles.middle}>
                04
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>
                    <p>UX DESIGN / UI DESIGN / NEXT.JS</p>
                    <h3>BBU BBU</h3>
                </div>
                <img src='/img/main/bbubbu.png' />
            </div>
        </section>
    </>
  )
}

export default works