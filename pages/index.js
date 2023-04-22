import Works from "./component/main/Works";
import Header from "./component/Header";
import styles from "@/styles/main.module.scss"
import About from "./component/main/About";
import Footer from "./component/Footer";
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import  ScrollToPlugin  from 'gsap/dist/ScrollToPlugin'
import { useEffect } from "react";

const Home = () => {
  
  const strigger = ()=>{

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let panels = gsap.utils.toArray(".panel"),
        observer = ScrollTrigger.normalizeScroll(true),
        scrollTween;

    // document.addEventListener("touchstart", e => {
    //     if (scrollTween) {
    //         e.preventDefault();
    //         e.stopImmediatePropagation();
    //     }
    // }, {capture: true, passive: false})

    function goToSection(i) {
        scrollTween = gsap.to(window, {
            scrollTo: {y: i * innerHeight, autoKill: false},
            onStart: () => {
                observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
                observer.enable();
            },
            duration: 1,
            onComplete: () => scrollTween = null,
            overwrite: true
        });
    }

    panels.forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top bottom",
            end: "+=199%",
            onToggle: self => self.isActive && !scrollTween && goToSection(i)
        });
    });
    
   
}
useEffect(()=>{
 
      strigger();
 
},[])


  return (
    <>
      <div>
        <Header />
        <section className={`${styles.main} panel`}>
          <h2 className={styles.name}>jueun</h2>
          <div className={styles.text}>
            <p>I AM STUDYING WEB PUBLISHER AND FRONT-END</p>
            <p>💛ANY PROBLEM CAN BE SOLVED POSITIVELY💛</p>
            <p>SCROLL TO EXPLORE</p>
          </div>
          <h2 className={styles.portfolio}>portfolio</h2>
          <img src='/img/main/face.png' />
        </section>
        <Works />
        <About />
        <Footer />
      </div>
    </>
    )
}

export default Home;
