import Link from 'next/link'
import React from 'react'
import styles from '@/styles/menu.module.scss'

const Menu = () => {
  return (
    <section className={styles.menu}>
        <div>HOPE YOU’RE HAVING A GREAT DAY!</div>
        <div className={styles.half}>
            <p>LEE JUEUN -  PORTFOLIO 2023</p>
            <ul>
                <li>
                    <p>/01</p>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <p>/01</p>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <p>/01</p>
                    <Link href="/Works">Works</Link>
                </li>
                <li>
                    <p>/01</p>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Menu