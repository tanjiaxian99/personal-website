import { footer } from "../data/data.js";
import ClickableLogo from "./ClickableLogo.js";

const Footer = () => {
  return (
    <footer className="links">
      <p>
        {"Website design by "}
        <a
          className="link"
          href="https://sg.linkedin.com/in/sebin-aum"
          target="_blank"
          rel="noreferrer"
        >
          Sebin Aum
        </a>
      </p>
      <p>
        {"View the website's code on "}
        <a
          className="link"
          href="https://github.com/tanjiaxian99/personal-website"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
