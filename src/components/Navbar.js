import { InView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { useRef, useEffect } from "react";

const Navbar = ({ headerInView }) => {
  return (
    <nav>
      <div className={`navbar-name ${headerInView ? "fade-out" : "fade-in"}`}>
        Jia Xian.
      </div>
      <ul className={headerInView ? "fade-out" : "fade-in"}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar-link"
          >
            home.
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar-link"
          >
            about.
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experiences"
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar-link"
          >
            experiences.
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar-link"
          >
            projects.
          </Link>
        </li>
      </ul>
    </nav>
    //   )}
    // </InView>
  );
};

export default Navbar;
