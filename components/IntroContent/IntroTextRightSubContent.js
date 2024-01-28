import Image from "next/image";
import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });
export default function IntroTextRightSubContent({ imgSrc, desc }) {
  return (
    <div style={{ textAlign: 'left'}}>
      <Image src={imgSrc} width={128} height={128} />
      <p
        className={shareTechMono.className}
        style={{
          textAlign: "justify",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
