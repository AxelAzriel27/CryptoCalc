import React from "react";
import {
  FaBitcoin,
  FaDollarSign,
  FaRegSmileBeam,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import GetStart from "./components/GetStart";
import NPC from "./components/NPC";

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <Header />

      {/* Getting Started Section */}
      <GetStart />

      {/* Crypto News, Prices, and Calculator Section */}
      <NPC />

      {/* Why Choose Us Section */}
      <section id="why-choose" className="why-choose-section">
        <h2>Why Choose This Website?</h2>
        <img
          src="https://wallpapercave.com/wp/wp4678496.jpg"
          alt="Why Choose Us"
        />
        <div className="why-choose-cards">
          <div className="why-choose-card">
            <FaRegSmileBeam className="why-choose-icon" />
            <h3>Friendly Interface</h3>
            <p>
              Our platform is designed with user-friendliness in mind, making it
              easy for beginners and experts alike.
            </p>
          </div>
          <div className="why-choose-card">
            <FaBitcoin className="why-choose-icon" />
            <h3>Real-Time Prices</h3>
            <p>
              Access live cryptocurrency prices to stay updated with the market,
              helping you make timely decisions.
            </p>
          </div>
          <div className="why-choose-card">
            <MdOutlineSecurity className="why-choose-icon" />
            <h3>Secure Transactions</h3>
            <p>
              Our secure platform ensures your transactions and data are safe
              and protected from any unauthorized access.
            </p>
          </div>
          <div className="why-choose-card">
            <FaDollarSign className="why-choose-icon" />
            <h3>Competitive Rates</h3>
            <p>
              We offer competitive rates to ensure that you get the most value
              from your trades on our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@cryptospider.com</p>
        <p>Phone: +1 800 123 4567</p>
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub /> GitHub
        </a>
      </section>
    </div>
  );
};

export default App;
