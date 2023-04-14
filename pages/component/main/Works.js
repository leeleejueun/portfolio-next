import React from 'react'
import styles from '@/styles/main.module.scss'
import classNames from 'classnames'

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
        <section className={styles.dplanex}>
            <div className={styles.top}>
                <p>01</p>
                <span></span>
                <p>04</p>
            </div>
            <div className={classNames({[styles.middle]: true, [styles.middle_on]: true})}>
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
    </>
  )
}

export default works