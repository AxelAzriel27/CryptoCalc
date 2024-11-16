import React, { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import Slider from "react-slick";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#1ad1a7",
};

const NPC = () => {
  const [fiatAmount, setFiatAmount] = useState(0);
  const [news, setNews] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
  const [amount, setAmount] = useState(0);
  const [convertedCrypto, setConvertedCrypto] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      try {
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
        setNews(newsResponse.data.articles.slice(0, 15));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, [selectedCurrency]);

  useEffect(() => {
    if (!amount || !selectedCrypto) return;
    
    const selectedCoin = cryptoData.find((coin) => coin.id === selectedCrypto);
    if (selectedCoin) {
      // Calculate crypto to fiat
      setFiatAmount(amount * selectedCoin.current_price);
      // Calculate fiat to crypto
      setConvertedCrypto(amount / selectedCoin.current_price);
    }
  }, [amount, selectedCrypto, cryptoData]);

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
        {!loading && (
           <div className="news-slider-container">
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
          </div>
        )}
        {loading && <ClipLoader cssOverride={override} size={50} />}
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
        <div className="converter-form">
  <input
    type="number"
    value={amount}
    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
    placeholder="Enter amount"
  />
  <select 
    value={selectedCrypto}
    onChange={(e) => setSelectedCrypto(e.target.value)}
  >
    {cryptoData.map((crypto) => (
      <option key={crypto.id} value={crypto.id}>
        {crypto.name}
      </option>
    ))}
  </select>
  <div className="conversion-results">
    <p>{amount} {selectedCrypto} = {fiatAmount.toFixed(2)} {selectedCurrency}</p>
    <p>{amount} {selectedCurrency} = {convertedCrypto.toFixed(8)} {selectedCrypto}</p>
  </div>
</div>
      </section>
    </>
  );
};
export default NPC;
