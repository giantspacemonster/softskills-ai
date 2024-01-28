"use client";
import styles from "./IntroContent.module.css";
import bg from "../../public/bg-front.jpg";
import IntroTextLeft from "./IntroTextLeft";
import IntroTextRight from "./IntroTextRight";
import Particle from "../Particles/Particles";
export default function IntroContent() {
  return (
    <div
      className={styles.container}
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      //   backgroundPosition: "bottom",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100%",
      // }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <Particle />
      </div>
      <div>
        <IntroTextLeft />
      </div>
      <div></div>
      <div>
        <IntroTextRight />
      </div>
    </div>
  );
}
