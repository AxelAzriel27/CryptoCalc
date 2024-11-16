import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import GetStart from "./components/GetStart";
import NPC from "./components/NPC";
import Why from "./components/WhySite";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <GetStart />
      <NPC />
      <Why />
      <ContactUs />
    </div>
  );
};

export default App;
