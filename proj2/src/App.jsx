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
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/home">Home </Link>
        <Link to="/about"> About</Link>
        <Link to="/videos">Videos </Link>
        <Link to="/members"> Members</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  )
  }

export default App
