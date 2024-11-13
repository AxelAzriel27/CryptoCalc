import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

const NPC = () => {
  const [news, setNews] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section id="news" className="news-section">
        <h2>Crypto News</h2>
        <div className="news-slider">
          {news.map((article, index) => (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              style={{ textDecoration: "none" }}
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
    </>
  );
};
export default NPC;
