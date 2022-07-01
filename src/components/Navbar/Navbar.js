import { Link, Events } from "react-scroll";
import styles from "./Navbar.module.scss";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

const Navbar = ({ headerInView }) => {
  const links = ["home", "about", "experiences", "projects"];
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  Events.scrollEvent.register("begin", () => setOpen(false));

  return (
    <>
      <nav className={styles.container}>
        <div
          className={`${styles.innerContainer} ${styles.fade} ${
            headerInView && styles.fadeHidden
          }`}
        >
          <p>Jia Xian.</p>
          <Hamburger rounded toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
      <div
        className={`${styles.links} ${styles.slide} ${
          !isOpen && styles.slideDownHidden
        }`}
      >
        {links.map((link, i) => (
          <Link
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.link}
            key={i}
          >
            {link}.
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
