import Works from "./component/main/Works";
import Header from "./component/Header";
import styles from "@/styles/main.module.scss"

const Home = () => {
  return (
    <>
      <div>
        <section className={styles.main}>
          <h2 className={styles.name}>jueun</h2>
          <div className={styles.text}>
            <p>I AM STUDYING WEB PUBLISHER AND FRONT-END</p>
            <p>💛ANY PROBLEM CAN BE SOLVED POSITIVELY💛</p>
            <p>SCROLL TO EXPLORE</p>
          </div>
          <h2 className={styles.portfolio}>portfolio</h2>
          <img src="/img/main/face.png" />
        </section>
        <Works />
      </div>
    </>
    )
}

export default Home;
