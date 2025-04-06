import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Container from './components/shared/Container'
import Paradigm from './pages/Paradigm' // This component will now handle all content types
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import ScrollToTop from './components/shared/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Navbar />
          <Container>
            <Routes>
              {/* Keep root redirecting to Home (which redirects to About) */}
              <Route path='/' element={<Home />} /> 
              <Route path='/about' element={<About />} />
              {/* Generalized route for all dynamic content */}
              <Route path='/:categoryParam/:subcategoryParam' element={<Paradigm />} />
            </Routes>
          </Container>
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
