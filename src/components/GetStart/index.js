import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
const GetStart = () => {
  return (
    <section id="getting-started" className="getting-started-section">
      <h2>Getting Started</h2>
      <div className="getting-started-cards">
        <div className="getting-started-card">
          <FaQuestionCircle className="getting-started-icon" />
          <h3>Crypto Basics</h3>
          <p>
            Learn the essentials of cryptocurrency, including what it is and how
            it works. This is the foundation you need before diving in!
          </p>
        </div>
        <div className="getting-started-card">
          <FaLightbulb className="getting-started-icon" />
          <h3>Guides & Tips</h3>
          <p>
            Explore our tutorials and guides to help you start trading with
            confidence. From wallet setup to advanced trading strategies, we’ve
            got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};
export default GetStart;
