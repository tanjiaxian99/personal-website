import { intro } from "../data/data.js";
import ClickableLogo from "./ClickableLogo.js";

const IntroWriteup = ({ inView }) => {
  const { writeup, logos } = intro;
  return (
    <div
      className={`intro-writeup slide-left-right ${inView ? "" : "reverse"}`}
    >
      <h2>about myself.</h2>

      {writeup.map((writeup, index) => (
        <p className="justify-text" key={index}>
          {writeup}
        </p>
      ))}

      <div className="logos-container">
        {logos.map((logo) => (
          <ClickableLogo logo={logo} />
        ))}
      </div>
    </div>
  );
};

export default IntroWriteup;
