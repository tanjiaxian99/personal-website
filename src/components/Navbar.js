import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-name">Jia Xian.</div>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
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
            >
              projects.
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
