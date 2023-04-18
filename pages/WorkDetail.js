import React from 'react'
import styles from '@/styles/workDetail.module.scss'
import Header from './component/Header'
import Footer from './component/Footer'
import Link from 'next/link'

const WorkDetail = () => {
  return (
    <>
      <Header />
      <Link href="/Works">X</Link>
      <section className={styles.content01}>
        <h3 className={styles.moveText}>DPLANEX DPLANEX DPLANEX DPLANEX</h3>
        <img src='/img/works/laptop.png' />
        <h3 className={styles.moveText}>DPLANEX DPLANEX DPLANEX DPLANEX</h3>
      </section>
      <Footer />
    </>
  )
}

export default WorkDetail