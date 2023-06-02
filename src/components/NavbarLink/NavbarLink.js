import React from "react";
import { Link } from "react-scroll";
import useBreakpointValue from "../../hooks/useBreakpointValue";
import styles from "./NavbarLink.module.scss";

const NavbarLink = ({ name, link }) => {
  const offset = useBreakpointValue({ base: -50, desktop: -30 });

  return (
    <Link
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      duration={1000}
      offset={offset}
      className={styles.link}
    >
      {name ? name : link}.
    </Link>
  );
};

export default NavbarLink;
