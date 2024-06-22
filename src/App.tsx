import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="container">
      <div className='header'>Frances Carter</div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
