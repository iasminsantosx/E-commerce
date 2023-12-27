import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavPrincipal from './componentes/NavBar'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css'

function App() {
  return (
    <div>
        <NavPrincipal />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App