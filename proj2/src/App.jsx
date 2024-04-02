import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import AboutUs from './AboutUs'
import Home from './Home'
import Videos from './Videos'
import Members from './Members'

function App() {
  const [firstClick, setFirstClick] = useState(true)

  function handleFirstClick(){
    setFirstClick(false)
  }

  return (
    <Router>
      <nav className= 'nav'>
        <div className = 'nav--text'>
        <Link to="/home">Home </Link>
        <nav className = "nav-links">
          <Link onClick = {handleFirstClick} to="/about"> About</Link>
          <Link onClick = {handleFirstClick} to="/videos">Videos </Link>
          <Link onClick = {handleFirstClick} to="/members"> Members</Link>
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
    
  )
  }

export default App
