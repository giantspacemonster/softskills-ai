import Image from "next/image";
import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/next.svg"
        width={64}
        height={64}
        style={{
          filter: "invert(1)",
        }}
      />
      <p style={{ padding: "4px" }}>Soft Skills AI</p>
    </div>
  );
}
