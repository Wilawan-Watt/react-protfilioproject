import React from "react";
import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://i.pinimg.com/736x/a2/1a/9e/a21a9ec4d5dfeaa4a9da4a5a0fd67953.jpg"
              alt=""
            />
          </Tilt>
          <p>Kitchor - Interior Design</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://i.pinimg.com/736x/3e/9c/7b/3e9c7b09f96195a242c8ad8df7094dcc.jpg"
              alt=""
            />
          </Tilt>
          <p>Square - Modern House</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://i.pinimg.com/736x/d1/b9/96/d1b996d1f25278d92d150e70327d253c.jpg"
              alt=""
            />
          </Tilt>
          <p>Havest - Organic farm</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://i.pinimg.com/736x/a9/be/c1/a9bec1cd989fa24fe67a2d41e779f8ce.jpg"
              alt=""
            />
          </Tilt>
          <p>Echofy - Environmental Sustainable</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://i.pinimg.com/736x/26/16/0b/26160bd4b1aa17c35eef872911b4e738.jpg"
              alt=""
            />
          </Tilt>
          <p>Wilma Restaurant</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://i.pinimg.com/474x/36/ee/9a/36ee9aa3055b1e1b2c9e03fe0beef0dd.jpg"
              alt=""
            />
          </Tilt>
          <p>Time to Travel</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
