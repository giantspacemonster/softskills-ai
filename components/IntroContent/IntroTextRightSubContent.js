import Image from "next/image";
import { Share_Tech_Mono } from "next/font/google";
import styles from "./IntrotextRight.module.css";
const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
export default function IntroTextRightSubContent({ imgSrc, desc, heading }) {
  return (
    <div className={styles.subContainer}>
      <Image src={imgSrc} width={128} height={128} />
      <div>
        <h3>{heading}</h3>
        <p
          className={shareTechMono.className}
          style={{
            textAlign: "justify",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
