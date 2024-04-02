import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useEffect
import reactLogo from './assets/react.svg';
import './style.css';
import AboutUs from './AboutUs';
import Home from './Home';
import Videos from './Videos';
import Members from './Members';

function App() {
  // Initialize the state based on local storage value
  

  // Side effect to store the value in local storage whenever it changes
 

  function handleFirstClick() {
    setFirstClick(false);
  }

  return (
    <Router>
      <nav className='nav'>
        <div className="nav-home">
          <Link to="/home"><img className="nav-img" src="./src/images/logo.png"/> </Link>
        </div>
        <div className='nav--text'>
          
          <nav className="nav-links">
            <Link onClick={handleFirstClick} to="/about">About</Link>
            <Link onClick={handleFirstClick} to="/videos">Videos </Link>
            <Link onClick={handleFirstClick} to="/members"> Members</Link>
          </nav>
        </div>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/members" element={<Members />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className = "footer"> 
        
        <div className = "footer-icons">
          <Link to="https://www.facebook.com/Noteworthy"><img className= "footer-logo" src = './logos/facebook.png' /></Link>
          <Link to="https://www.instagram.com/cal_noteworthy/"><img className= "footer-logo" src = './logos/instagram.png' /></Link>
          <Link to="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA"><img className= "footer-logo" src = './logos/youtube.png' /></Link>
          <Link to="https://www.tiktok.com/@uc_noteworthy"><img className= "footer-logo" src = './logos/tiktok.png' /></Link>

        </div>
        <div className = "footer-text">
            <p>We are a student group acting independently of the University of California. We take full responsibility for our organization and this website.<br/>Copyright © Noteworthy A Cappella 2023</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
