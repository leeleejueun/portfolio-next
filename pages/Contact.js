import React from 'react'
import styles from '@/styles/contact.module.scss'
import Header from './component/Header'

const Contact = () => {
  return (
    <>
    <Header />
      <section className={styles.please}>
        <div className={styles.top}>
          <h2 className={styles.title}>I'M...</h2>
          <img src='/img/contact/qr.png'/>
        </div>
        <div className={styles.bottom}>
          <p>제가 하고싶은말은 제발 취업 시켜주세요</p>
          <p>제발요 열심히 일 도전 해보겠습니다</p>
          <p>시켜만 주시면 뭐든 열심히 하겠습니다</p>
          <p>저 한번 믿어주십쇼</p>
          <p>신입으로서 항상 배우는 자세를 가지며 경력을 쌓을 마음의 준비가 되어있습니다! </p>
          <p>아직 많이 부족하지만 계속해서 변화하는 세태에 맞춰 자기 개발을 미루지 않는</p>
          <p>기본기 탄탄한 웹 퍼블리셔이자 프론트엔드 개발자가 되도록 노력하겠습니다.</p>
        </div>
      </section>
      <section className={styles.contact}>
        <h3>I’LL GET BACK TO YOU QUICKLY</h3 >
        <div className={styles.content}>
          <div className={styles.qr}>
            <img src='/img/contact/qr.png'/>
            <p>카카오톡 오픈채팅</p>
          </div>
          <div className={styles.email}>
            <div>E-MAIL</div>
            <p>jueun413@naver.com</p>
            <p>leejueun413@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact