import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import { ref, onValue, getDatabase } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";

const GetStart = () => {
  const [gettingStarted, setGettingStarted] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const gettingStartedRef = ref(db, "gettingStarted");

    onValue(gettingStartedRef, (snapshot) => {
      const data = snapshot.val();
      setGettingStarted(data);
    });
  }, []);

  if (!gettingStarted) return <p>Loading...</p>;

  const { title, cards } = gettingStarted;

  return (
    <section id="getting-started" className="getting-started-section">
      <h2>{title}</h2>
      <div className="getting-started-cards">
        <div className="getting-started-card">
          <FaQuestionCircle className="getting-started-icon" />
          <h3>{cards.card1.title}</h3>
          <p>{cards.card1.description}</p>
        </div>
        <div className="getting-started-card">
          <FaLightbulb className="getting-started-icon" />
          <h3>{cards.card2.title}</h3>
          <p>{cards.card2.description}</p>
        </div>
      </div>
    </section>
  );
};

export default GetStart;
