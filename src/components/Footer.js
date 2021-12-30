import { footer } from "../data/data.js";
import Logos from "./Logos.js";

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
