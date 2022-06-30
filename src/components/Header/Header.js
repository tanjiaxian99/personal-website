import { InView } from "react-intersection-observer";
import { header } from "../../data/data.js";
import styles from "./Header.module.scss";

const Header = ({ setHeaderInView }) => {
  return (
    <InView
      initialInView={true}
      onChange={(inView, _) => setHeaderInView(inView)}
    >
      {({ ref }) => (
        <header className={styles.container} ref={ref} id="home">
          <img
            src={header.profilePic}
            alt="Tan Jia Xian"
            className={styles.profilePic}
          />
          <p>Hello everybody, I am</p>
          <p className={styles.name}>Tan Jia Xian</p>
          <p>Computer Science, Year 2</p>
          <p>National University of Singapore (NUS)</p>
        </header>
      )}
    </InView>
  );
};

export default Header;
