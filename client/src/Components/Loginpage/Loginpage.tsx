import React from "react";
import styles from "./Loginpage.module.css";
import googleImage from "../../assests/googleImage.png";
import twitterImage from "../../assests/twitterImage.png";
import githubImage from "../../assests/githubImage.png";
const Loginpage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer}>
          <img src={googleImage} alt="Google Icon" />
          <p>Login With Google</p>
        </div>

        <div className={`${styles.googleContainer} ${styles.githubContainer}`}>
          <img src={githubImage} alt="Github Icon" />
          <p>Login With Github</p>
        </div>

        <div className={`${styles.googleContainer} ${styles.twitterContainer}`}>
          <img src={twitterImage} alt="Twitter Icon" />
          <p>Login With Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
