import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useEffect
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './style.css';
import AboutUs from './AboutUs';
import Home from './Home';
import Videos from './Videos';
import Members from './Members';

function App() {
  // Initialize the state based on local storage value
  const [firstClick, setFirstClick] = useState(() => {
    // Use a function to only read from localStorage once during initialization
    const savedFirstClick = localStorage.getItem('firstClick');
    return savedFirstClick ? savedFirstClick === 'true' : true;
  });

  // Side effect to store the value in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('firstClick', firstClick);
  }, [firstClick]);

  function handleFirstClick() {
    setFirstClick(false);
  }

  return (
    <Router>
      <nav className='nav'>
        <div className='nav--text'>
          <div className="nav-home">
            <Link to="/home">Home </Link>
          </div>
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
      </Routes>
      {firstClick && <Home/>}
    </Router>
  );
}

export default App;
