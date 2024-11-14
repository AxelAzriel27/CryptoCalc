import { ref, onValue, getDatabase } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";

const Header = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeaderData(data);
    });
  }, []);

  if (!headerData) return <p>Loading...</p>;

  return (
    <header className="App-header">
      <h1>{headerData.title}</h1>
      <p>{headerData.description}</p>
    </header>
  );
};

export default Header;
