import React from 'react'
import styles from '@/styles/workDetail.module.scss'
import Header from './component/Header'
import Footer from './component/Footer'
import Link from 'next/link'

const WorkDetail = () => {
  return (
    <>
      <Header />
      <Link href="/Works" className={styles.closebtn}>X</Link>
      <section className={styles.content01}>
        <div className={styles.titleWrap}>
          <div className={`${styles.moveWrap} ${styles.top}`}>
            <div>DPLANEX</div>
            <div>DPLANEX</div>
            <div>DPLANEX</div>
            <div>DPLANEX</div>
            <div>DPLANEX</div>
          </div>
          <img src='/img/works/dlaptop.png' />
          <div className={`${styles.moveWrap} ${styles.bottom}`}>
            <div>DPLANEX</div>
            <div>DPLANEX</div>
            <div>DPLANEX</div>
            <div>DPLANEX</div>
            <div>DPLANEX</div>
          </div>
        </div>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>INFO</div>
            <div className={styles.detailWrap}>
              <p>첫 프로젝트</p>
              <p>clone coding</p>
              <p>3주</p>
              <p>반응형</p>
              <p>one page scroll</p>
            </div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>TOOL</div>
            <div className={styles.detailWrap}>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>SASS</p>
              <p>JAVASCRIPT</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.content02}>
        <h3>OVERVIEW</h3>
        <div className={styles.overview}>
          <div className={styles.image}>
            <img src='/img/works/dmobile.png'/>
          </div>
          <div className={styles.text}>
            <div className={styles.info}>
              <div>INFO</div>
              <p>Content of the project여기다가 프로젝트 설명쓰기
                이 사이트는 처음으로 진행했던 클론코딩사이트입니다.
                원페이지로 구성되어 있으며 스크롤시 화면이 내려가게 되어있습니다.
              </p>
            </div>
            <div className={styles.view}>
              <Link href='/'>SEE WEBSITE</Link>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={`${styles.box} ${styles.box01}`}>
            <img src='/img/works/d1.png'/>
            <img src='/img/works/d2.png'/>
          </div>
          <div className={`${styles.box} ${styles.box02}`}>
            <img src='/img/works/d3.png' />
            <img src='/img/works/d4.png' />
          </div>
        </div>
        <div className={styles.moveText}>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
          <h4>DPLANEX</h4>
        </div>
      </section>
      <section className={styles.content03}>
        <Link href='/'>
          <div>NEXT&nbsp;</div>
          <img src='/img/works/tmobile.png'/>
          <div>&nbsp;WORK</div>
        </Link>
      </section>
      <Footer />
    </>
  )
}

export default WorkDetail