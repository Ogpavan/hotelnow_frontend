import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Callbutton from "./components/Callbutton/Callbutton.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import SearchResults from "./pages/SearchResults/SearchResults.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <div className="md:hidden  block ">
        <Callbutton />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
