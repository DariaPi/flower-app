// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Contacts from "./Contact";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to ="/" className="navLink">Shop</Link>
        <Link to ="/contact" className="navLink">Contact Us</Link>
        <Link to ="/about" className="navLink">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/contact" element={ <Contacts/> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>
    </Router>
  );
}

export default App;

// Источник: https://www.canadianaflowers.com/about/yes-we-can