import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import './pageLayout.css';
import './base.css';

function App() {
  return (
    <Router>
      <div className='page'>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
