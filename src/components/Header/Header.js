import { InView } from "react-intersection-observer";
import { header } from "../../data/data.js";
import "./Header.css";

const Header = ({ setHeaderInView }) => {
  return (
    <InView
      initialInView={true}
      onChange={(inView, entry) => setHeaderInView(inView)}
    >
      {({ ref }) => (
        <header className="container" ref={ref}>
          <img
            src={header.profilePic}
            alt="Tan Jia Xian"
            className="profile-pic"
          />
          <p>Hello everybody, I am</p>
          <p className="name">Tan Jia Xian</p>
          <p>Computer Science, Year 2</p>
          <p>National University of Singapore (NUS)</p>
        </header>
      )}
    </InView>
  );
};

export default Header;
