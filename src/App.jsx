import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Container from './components/shared/Container'
import Paradigm from './pages/Paradigm'
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
              <Route path='/paradigm/:paradigmName' element={<Paradigm />} />
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Container>
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
