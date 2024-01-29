import styles from "./SectionDivider.module.css";
export default function SectionDivider() {
  return (
    <div
      style={{
        marginBottom: "-4px",
      }}
    >
      <svg
        className="editorial"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--gunmetal)" />
            <stop
              offset="50%"
              stopColor="var(--rich-black)"
              stopOpacity="0"
            />
            <stop offset="100%" stopColor="var(--deep-sky-blue)" />
          </linearGradient>
          <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--gunmetal)" />
            <stop
              offset="50%"
              stopColor="var(--rich-black)"
              stopOpacity="0"
            />
            <stop offset="100%" stopColor="var(--night)" />
          </linearGradient>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z"
          />
        </defs>
        <g className={styles.parallax1}>
          <use href="#gentle-wave" x="50" y="3" fill="url(#Gradient1)" />
        </g>
        <g className={styles.parallax2}>
          <use href="#gentle-wave" x="50" y="0" fill="url(#Gradient2)" />
        </g>
        <g className={styles.parallax3}>
          <use href="#gentle-wave" x="50" y="9" fill="url(#Gradient1)" />
        </g>
        <g className={styles.parallax4}>
          <use href="#gentle-wave" x="50" y="6" fill="url(#Gradient2)" />
        </g>
      </svg>
    </div>
  );
}
