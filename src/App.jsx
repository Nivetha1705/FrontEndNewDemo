import React from 'react';
//import Home from './home.jsx';
//import AboutUs from './aboutus.jsx';
//import ContactUs from './contactus.jsx';
//import './new.css';
//import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ol>
          <li><Link to="/">Nivetha</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ol>
      </nav>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <footer>
        <p>©CopyRights.Rights are reserved</p>
      </footer>
    </Router>
  );


}

export default App;
 
