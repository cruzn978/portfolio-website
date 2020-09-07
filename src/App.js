import React from 'react';
import './App.css';
import { HashRouter as Router } from "react-router-dom";
import { Navigation } from './Navigation'
import Routes from './Routes'
import Footer from './Footer';

function App() {
  return (
    <div>
    <Router>
    <Navigation/>
    <Routes/>
    <Footer />
    </Router>
  </div>
  );
}

export default App;
