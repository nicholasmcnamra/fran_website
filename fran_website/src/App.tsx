import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works';
import ContactPage from './Components/ContactForm';
import Account from './Components/Account';
import ArtworksPortal from './Components/ArtworksPortal';
import { ArtworksManager } from './Components/ArtworksManager';

function App() {
  return (
    <div className="container">

      <Router>
        <Routes>
          <Route path="/" element={withNavbar(Home)}></Route>
          <Route path="/about" element={withNavbar(About)}></Route>
          <Route path="/works" element={withNavbar(Works)}></Route>
          <Route path="/contact" element={withNavbar(ContactPage)}></Route>
          <Route path="/account" element={<Account props={null}/>}></Route>
          <Route path="/artwork" element={<ArtworksPortal props={null}/>}></Route>
          <Route path="/artworks-manager" element={<ArtworksManager props={null}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

const withNavbar = (Component:React.FC) => {
  return (
    <div>
      <div className="component-container">
      <div className='header'>Frances Carter</div>
      <NavBar />
      <Component></Component>
      </div>

    </div>
  )
}

export default App;
