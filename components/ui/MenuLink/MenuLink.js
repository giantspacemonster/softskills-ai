import styles from "./MenuLink.module.css";
export default function MenuLink({menuText}) {
  return <div className={styles.container}>{menuText}</div>;
}
