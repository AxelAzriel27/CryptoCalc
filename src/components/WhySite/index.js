import { useState, useEffect, CSSProperties } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#1ad1a7",
};

const Why = () => {
  const [whyData, setWhyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const whyChooseRef = ref(db, "whyChoose");

    onValue(whyChooseRef, (snapshot) => {
      const data = snapshot.val();
      setWhyData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <ClipLoader
          color="#1ad1a7"
          loading={loading}
          cssOverride={override}
          size={50}
        />
      </div>
    );
  }

  if (!whyData) return <p>No data available.</p>;

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
