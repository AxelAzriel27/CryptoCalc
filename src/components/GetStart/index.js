import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";

const GetStart = () => {
  const [header, setHeader] = useState([]);
  const [boxTitle, setBoxTitle] = useState([]);
  const [boxDesc, setBoxDesc] = useState([]);

  useEffect(() => {
    const header = collection(db, "header");
    const title = collection(db, "title");
    const description = collection(db, "description");

    // Real-time listener for 'about' collection
    const unsubscribeHeader = onSnapshot(header, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHeader(list);
    });

    // Real-time listener for 'experience' collection
    const unsubscribeTitle = onSnapshot(title, (snapshot) => {
      const titleList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBoxTitle(titleList);
    });

    // Real-time listener for 'academicHistory' collection
    const unsubscribeDescription = onSnapshot(description, (snapshot) => {
      const descList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBoxDesc(descList);
    });

    // Clean up listeners on unmount
    return () => {
      unsubscribeHeader();
      unsubscribeTitle();
      unsubscribeDescription();
    };
  }, []);

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
