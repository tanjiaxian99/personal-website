import { header } from "../data/data.js";

const Header = () => {
  return (
    <header id="home" className="viewport-fit">
      <div className="header-welcome">
        <p>hello everybody, I am</p>
        <h1>Tan Jia Xian</h1>
        <p>Computer Science, Year 2</p>
        <p>National University of Singapore (NUS)</p>
      </div>
      <img src={header.profilePic} alt="Tan Jia Xian" className="profile-pic" />
    </header>
  );
};

export default Header;
