import { footer } from "../data/data.js";
import Logos from "./Logos.js";

const Footer = () => {
  return (
    <div className="container">
      <p>{footer.title}</p>

      <div className="logos-container">
        {footer.logos.map(({ name, link, logo }) => (
          <div className="logo-container">
            <a href={link} target="_blank" rel="noreferrer">
              <img className="logo" src={logo} alt={name} aria-label={name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
