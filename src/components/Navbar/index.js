import {
  FaRocket,
  FaNewspaper,
  FaMoneyBillWave,
  FaHandsHelping,
  FaCalculator,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollToSection("getting-started")}>
          <FaRocket /> Getting Started
        </li>
        <li onClick={() => scrollToSection("news")}>
          <FaNewspaper /> News
        </li>
        <li onClick={() => scrollToSection("crypto-prices")}>
          <FaMoneyBillWave /> Crypto Prices
        </li>
        <li onClick={() => scrollToSection("why-choose")}>
          <FaHandsHelping /> Why Choose Us
        </li>
        <li onClick={() => scrollToSection("calculator")}>
          <FaCalculator /> Calculator
        </li>
        <li onClick={() => scrollToSection("contact")}>
          <FaEnvelope /> Contact
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
