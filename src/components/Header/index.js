import { ref, onValue, getDatabase } from "firebase/database";
import { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#1ad1a7",
};

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    setLoading(true);

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeaderData(data);
      setLoading(false);
    });
  }, []);

  if (!headerData) return <p>Loading...</p>;

  return (
    <>
      {!loading && (
        <header className="App-header">
          <div className="icon-background">
            <FaBitcoin className="coin-icon" />
          </div>
          <h1>{headerData.title}</h1>
          <p>{headerData.description}</p>
        </header>
      )}
      {loading && <ClipLoader cssOverride={override} size={50} />}
    </>
  );
};

export default Header;
