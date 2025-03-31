import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Container from './components/shared/Container'
import Paradigm from './pages/Paradigm'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
