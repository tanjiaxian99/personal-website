import { InView } from "react-intersection-observer";
import { header } from "../data/data.js";

const Header = ({ setHeaderInView }) => {
  return (
    <InView
      initialInView={true}
      onChange={(inView, entry) => setHeaderInView(inView)}
    >
      {({ ref }) => (
        <header className="viewport-fit" ref={ref}>
          <div className="header-welcome">
            <p>hello everybody, I am</p>
            <h1 className="header-name">Tan Jia Xian</h1>
            <p>Computer Science, Year 2</p>
            <p>National University of Singapore (NUS)</p>
          </div>
          <img
            src={header.profilePic}
            alt="Tan Jia Xian"
            className="profile-pic"
          />
        </header>
      )}
    </InView>
  );
};

export default Header;
