import { FaBitcoin, FaDollarSign, FaRegSmileBeam } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

const Why = () => {
  return (
    <section id="why-choose" className="why-choose-section">
      <h2>Why Choose This Website?</h2>
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
            Our secure platform ensures your transactions and data are safe and
            protected from any unauthorized access.
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
  );
};

export default Why;
