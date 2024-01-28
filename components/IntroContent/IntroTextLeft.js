import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
export default function IntroTextLeft() {
  return (
    <div>
      <p
        className={shareTechMono.className}
        style={{
          fontSize: "3em",
          textAlign: "left",
        }}
      >
        Elevate your soft skills with precision through data-driven training
      </p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <div>
          <p
            className={shareTechMono.className}
            style={{
              fontSize: "3em",
              textAlign: "left",
            }}
          >
            1.1K
          </p>
          <p className={shareTechMono.className} style={{ textAlign: "left" }}>
            Subscibers
          </p>
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "4px solid black",
            borderRadius: "50px",
            background: "var(--deep-sky-blue)",
          }}
        >
          <div></div>
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "4px solid black",
            borderRadius: "50px",
            background: "var(--deep-sky-blue)",
            transform: "translateX(-24px)",
          }}
        >
          <div></div>
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "4px solid black",
            borderRadius: "50px",
            background: "var(--deep-sky-blue)",
            transform: "translateX(-48px)",
          }}
        >
          <div></div>
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "4px solid black",
            borderRadius: "50px",
            background: "var(--deep-sky-blue)",
            transform: "translateX(-72px)",
          }}
        >
          <div></div>
        </div>
      </div>
      <p className={shareTechMono.className} style={{
        textAlign: 'justify',
        color: '#AAA'
      }}>
        Join our community of empowered learners at SkillSculptorAI, where
        subscribers delight in personalized journeys, unlocking the joy of
        mastering soft skills through engaging and effective services tailored
        just for them.
      </p>
    </div>
  );
}
