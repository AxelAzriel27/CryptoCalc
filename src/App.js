import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import {
  FaBitcoin,
  FaCoins,
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

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [news, setNews] = useState([]);
  const [amount, setAmount] = useState(0);
  const [convertedCrypto, setConvertedCrypto] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");

  useEffect(() => {
    const fetchCryptoData = async () => {
      const cryptoResponse = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: selectedCurrency,
            order: "market_cap_desc",
            per_page: 10,
          },
        }
      );
      setCryptoData(cryptoResponse.data);

      const newsResponse = await axios.get(
        "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=637608bc5b0a49268cdba327b7d7fb55"
      );
      setNews(newsResponse.data.articles.slice(0, 5));
    };
    fetchCryptoData();
  }, [selectedCurrency]);

  const handleCalculate = () => {
    const selectedCoin = cryptoData.find((coin) => coin.id === selectedCrypto);
    if (selectedCoin) {
      setConvertedCrypto(amount / selectedCoin.current_price);
    }
  };

  const cryptoSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <Header />

      {/* Getting Started Section */}
      <GetStart />

      {/* Crypto News Section */}
      <section id="news" className="news-section">
        <h2>Crypto News</h2>
        <div className="news-slider">
          {news.map((article, index) => (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="news-card">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt="News headline"
                    className="news-image"
                  />
                )}
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Crypto Prices Section */}
      <section id="crypto-prices" className="crypto-section">
        <h2>Crypto Prices</h2>
        <Slider {...cryptoSettings} className="crypto-slider">
          {cryptoData.map((coin) => (
            <div className="crypto-card" key={coin.id}>
              <h3>{coin.name}</h3>
              <p>Price: ${coin.current_price.toFixed(2)}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="why-choose-section">
        <h2>Why Choose This Website?</h2>
        <img src="https://via.placeholder.com/800x400" alt="Why Choose Us" />
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

      {/* Calculator Section */}
      <section id="calculator" className="calculator-section">
        <h2>Crypto Calculator</h2>
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="idr">IDR</option>
          <option value="sgd">SGD</option>
          <option value="myr">MYR</option>
          <option value="php">PHP</option>
          <option value="vnd">VND</option>
          <option value="thb">THB</option>
          {/* Add other currencies as needed */}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in selected currency"
        />
        <select
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
        >
          {cryptoData.map((coin) => (
            <option value={coin.id} key={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
        <button onClick={handleCalculate}>Calculate</button>
        <p>Crypto amount: {convertedCrypto.toFixed(5)}</p>
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
