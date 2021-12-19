import { basicInfo } from "../data/data.js";

const Header = () => {
  return (
    <header className="header viewport-fit flex-center">
      <h1>{basicInfo.name}</h1>
      <h2>{basicInfo.description}</h2>
    </header>
  );
};

export default Header;
