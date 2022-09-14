import { useLayoutEffect } from "react";
import { InView } from "react-intersection-observer";
import ScrollDown from "../ScrollDown/ScrollDown.js";
import profilePic from "../../assets/images/profile-pic.jpg";
import styles from "./Header.module.scss";

const Header = ({ setHeaderInView }) => {
  useLayoutEffect(() => {
    const updateHeight = () =>
      (document.getElementById("home").style.height =
        window.innerHeight + 1 + "px");
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <InView
      initialInView={true}
      onChange={(inView, _) => setHeaderInView(inView)}
    >
      {({ ref }) => (
        <header className={styles.container} ref={ref} id="home">
          <img
            src={profilePic}
            alt="Tan Jia Xian"
            className={styles.profilePic}
          />
          <div className={styles.text}>
            <p className={styles.name}>Tan Jia Xian</p>
            <p>Computer Science, Year 2</p>
            <p>National University of Singapore (NUS)</p>
          </div>
          <ScrollDown />
        </header>
      )}
    </InView>
  );
};

export default Header;
