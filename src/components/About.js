import { about } from "../data/data.js";
import ClickableLogo from "./ClickableLogo.js";

const IntroWriteup = ({ inView }) => {
  const { writeup, logos } = about;
  return (
    <div className="about">
      <h2 className="section-title">about myself.</h2>

      <div
        className={`about-writeup slide-left-right ${inView ? "" : "reverse"}`}
      >
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
    </div>
  );
};

export default IntroWriteup;
