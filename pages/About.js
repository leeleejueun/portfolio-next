import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import styles from '@/styles/about.module.scss'

const About = () => {
  return (
    <>
      <Header />
      <section className={styles.content01}>
        <h3>HELLO!</h3>
        <h3>I'M JU-EUN, LIVING IN KOREA</h3>
        <img src='/img/about/Flag.png'/>
        <h3>SINCE 1998.</h3>
        <h3>I LOVE MYSELF❤️</h3>
      </section>
      <section className={styles.content02}>
        <h3>I'M STUDYING WEB PUBLISHER AND</h3>
        <h3>FRONT-END SINCE SEPTEMBER 2022.</h3>
        <h3>MY GOAL IS TO BE A DESIGNER AND ENGINEER</h3>
        <h3>WHO CAN CONTRIBUTE TO OTHERS.</h3>
      </section>
      <section  className={styles.content03}>
        <h3>I USE THESE TOOLS TO WORK</h3>
        <ul>
          <li>
            <h4>HTML5</h4>
            <p>웹 접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.</p>
          </li>
          <li>
            <h4>CSS3</h4>
            <p>POSITION, DISPLAY를 사용하여 반응형웹을 적용할 수 있습니다. </p>
          </li>
          <li>
            <h4>SASS</h4>
            <p>SCSS의 문법과 모듈화를 잘 활용하여  스타일 작업을 할 수 있습니다.</p>
          </li>
          <li>
            <h4>Js</h4>
            <p>JAVASCRIPT의 배열, 메소드, FUNCTION을 다양한 상황에 적용할 수 있습니다. </p>
          </li>
          <li>
            <h4>react.js</h4>
            <p>react 구조와 hook을 잘 알고 있으며 재사용가능한 컴포넌트 설계를 할 수 있습니다.</p>
          </li>
          <li>
            <h4>next.js</h4>
            <p>next 구조와 hook을 잘 알고 있으며 재사용가능한 컴포넌트 설계를 할 수 있습니다.</p>
          </li>
          <li>
            <h4>figma</h4>
            <p>데스크톱, 모바일 UI/UX 시안을 작업할 수 있으며, 디버깅을 잘 활용할 수 있습니다.</p>
          </li>
          <li>
            <h4>git</h4>
            <p>commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리에 접근할 수 있습니다.</p>
          </li>
        </ul>
      </section>
      <Footer color='0' />
    </>
  )
}

export default About