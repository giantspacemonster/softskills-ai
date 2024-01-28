import styles from "./Button.module.css";
export default function Button({ btnText }) {
  return <div className={styles.container}>{btnText}</div>;
}
