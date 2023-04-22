import React, { useState } from 'react'
import styles from '@/styles/header.module.scss'
import Link from 'next/link';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu =() => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">JE</Link>
      </div>
      <button className={`${styles.btn} ${isOpen ? styles.open : ""}`} onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
      </button>
      <section className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
          <div className={styles.text}>HOPE YOU’RE HAVING A GREAT DAY!</div>
          <div className={styles.half}>
              <ul>
                  <li>
                      <p>/01</p>
                      <Link href="/" onClick={handleMenu}>HOME</Link>
                  </li>
                  <li>
                      <p>/02</p>
                      <Link href="/About" onClick={handleMenu}>About</Link>
                  </li>
                  <li>
                      <p>/03</p>
                      <Link href="/Works" onClick={handleMenu}>Works</Link>
                  </li>
                  <li>
                      <p>/04</p>
                      <Link href="/Contact" onClick={handleMenu}>Contact</Link>
                  </li>
              </ul>
          </div>
      </section>
    </nav>
  )
}

export default Header