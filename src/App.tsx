import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import your components here.
// import Home from './components/Home';
// import About from './components/About';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Practica Game</h1>
        <Routes>
          {/* Define your routes here */}
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/about' element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;