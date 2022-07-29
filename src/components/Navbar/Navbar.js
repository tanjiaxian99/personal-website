import { Events } from "react-scroll";
import styles from "./Navbar.module.scss";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import NavbarLink from "../NavbarLink/NavbarLink";

const Navbar = ({ headerInView }) => {
  const links = ["home", "about", "experiences", "projects"];
  const [isOpen, setOpen] = useState(false);
  const desktopView = useBreakpointValue({ base: false, desktop: true });

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "visible";
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
          {!desktopView && (
            <Hamburger rounded toggled={isOpen} toggle={setOpen} />
          )}
          {desktopView && (
            <div className={styles.desktopLinks}>
              {links.map((link, i) => (
                <NavbarLink link={link} key={i} />
              ))}
            </div>
          )}
        </div>
      </nav>
      <div
        className={`${styles.mobileLinks} ${styles.slide} ${
          !isOpen && styles.slideDownHidden
        }`}
      >
        {links.map((link, i) => (
          <NavbarLink link={link} key={i} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
