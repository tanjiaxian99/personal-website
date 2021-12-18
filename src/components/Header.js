import { basicInfo } from "../data/data.js";

const Header = () => {
  return (
    <header className="viewport-fit flex-column flex-center header">
      <h1>{basicInfo.name}</h1>
      <h2>{basicInfo.description}</h2>
    </header>
  );
};

export default Header;
