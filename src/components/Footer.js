import { footer } from "../data/data.js";
import ClickableLogo from "./ClickableLogo.js";

const Footer = () => {
  return (
    <footer>
      <p>{footer.title}</p>

      <div className="logos-container">
        {footer.logos.map((logo) => (
          <ClickableLogo logo={logo} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
