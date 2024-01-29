export default function StylizedPageSeparator() {
  return (
    <div
      style={{
        position: "absolute",
        marginTop:"-24px",
        zIndex: "0"
      }}
    >
      <PageSeparatorLine N={16} translateX={-24} />
      <PageSeparatorLine N={17} translateX={-72} translateY={-38} />
      <PageSeparatorLine N={16} translateX={-24} translateY={-75} />
    </div>
  );
}
function PageSeparatorLine({ translateX, translateY, N }) {
  const page_separator = [...Array(N).keys()];
  return (
    <div
      style={{
        display: "flex",
        transform: `translate(${translateX ? translateX : 0}px, ${
          translateY ? translateY : 0
        }px)`,
      }}
    >
      {page_separator.map((index) => (
        <div key={index}>
          <PageSeparatorElement />
        </div>
      ))}
    </div>
  );
}
function PageSeparatorElement() {
  const random_selection = [100, 72, 120, 100, 72, 220, 220, 100];
  var random_index = Math.floor(Math.random() * random_selection.length);
  var randomElement = random_selection[random_index];
  return (
    <div
      style={{
        // border: "1px solid yellow",
        background: `radial-gradient(var(--prussian-blue),var(--oxford-blue), var(--deep-sky-blue) ${randomElement}%)`,
        width: "96px",
        margin: "1px",
        height: "96px",
        display: "inline-block",
        fontSize: "initial",
        clipPath:
          "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
        marginBottom: "12px",
        transform: "translateX(0)",
      }}
    ></div>
  );
}
