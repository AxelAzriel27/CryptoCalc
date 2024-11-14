import { FaBitcoin, FaDollarSign, FaRegSmileBeam } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../config/firebase"; // Update with the correct path

const Why = () => {
  const [whyData, setWhyData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const whyChooseRef = ref(db, "whyChoose");

    onValue(whyChooseRef, (snapshot) => {
      const data = snapshot.val();
      setWhyData(data);
    });
  }, []);

  if (!whyData) return <p>Loading...</p>;

  const { title, cards } = whyData;

  return (
    <section id="why-choose" className="why-choose-section">
      <h2>{title}</h2>
      <div className="why-choose-cards">
        {Object.keys(cards).map((key) => {
          const card = cards[key];
          const Icon =
            require("react-icons/fa")[card.icon] ||
            require("react-icons/md")[card.icon];

          return (
            <div key={key} className="why-choose-card">
              <Icon className="why-choose-icon" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Why;
