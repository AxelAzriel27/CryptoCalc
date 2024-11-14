import { FaBitcoin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="App-header">
      <div className="icon-background">
        <FaBitcoin className="coin-icon" />
      </div>
      <h1>CryptoCalc</h1>
      <p>Your source for the latest in cryptocurrency</p>
    </header>
  );
};

export default Header;
