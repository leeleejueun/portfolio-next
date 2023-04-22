import React, { useState } from 'react'
import styles from '@/styles/footer.module.scss'
import Link from 'next/link'

const Footer = ({color}) => {

  console.log(color)
  // const [colorChange,setColorChange] = useState();
  // setColorChange(color);
  return (
    <section className={`${styles.footer} panel`}>
      <div className={styles.background}>
        <div className={styles.top}>
          <div className={styles.menu}>
            <div className={`${styles.menuContainer} ${styles.menu01}`}>
              <p>01/</p>
              <ul className={styles.title}>
                <li className={styles.menuTitle}>SITEMAP</li>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/About">ABOUT</Link></li>
                <li><Link href="/Works">WORKS</Link></li>
                <li><Link href="/Contact">CONTACT</Link></li>
              </ul>
            </div>
            <div className={`${styles.menuContainer} ${styles.menu02}`}>
              <p>02/</p>
              <ul className={styles.title}>
                <li>SOCIALS</li>
                <li><Link href="/">GIT</Link></li>
                <li><Link href="/About">INSTAGRAM</Link></li>
                <li><Link href="/Works">NOTION</Link></li>
              </ul>
            </div>
          </div>
          <div className={styles.contact}>
            <Link href="/Contact">LET’S WORK TOGETHER</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <h2>LEE JU EUN</h2>
          <div className={styles.text}>
            <p>PORTFOLIO 2023</p>
            <Link href="/"><p>BACK TO TOP</p></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer