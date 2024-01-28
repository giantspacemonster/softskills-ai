import IntroTextRightSubContent from "./IntroTextRightSubContent";

const desc1 = `
Tailored to individual needs, SkillSculptorAI crafts unique learning
        paths based on data-driven insights, ensuring each subscriber receives a
        customized experience that aligns perfectly with their soft skills
        development goals.
`;
const desc2 = `
Stay motivated and informed with our real-time progress tracking
        feature. Subscribers can monitor their advancements, receive performance
        analytics, and celebrate milestones, fostering a sense of achievement
        and continual growth on their soft skills journey.
`;
export default function IntroTextRight() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
      }}
    >
      <IntroTextRightSubContent imgSrc="/Learn.svg" desc={desc1} />
      <IntroTextRightSubContent imgSrc="/Progress.svg" desc={desc2} />
    </div>
  );
}
