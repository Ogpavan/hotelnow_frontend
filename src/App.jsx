import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import Callbutton from "./Callbutton/Callbutton.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <div className="md:hidden  block ">
        <Callbutton />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
