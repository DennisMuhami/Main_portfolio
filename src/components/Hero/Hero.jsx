import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dennis Muhami</h1>
        <p className={styles.description}>
          I'm a junior full-stack developer experienced in using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ndamburidennis2006@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
