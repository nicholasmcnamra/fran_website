import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
