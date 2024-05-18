import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ls from 'local-storage'
///boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Home from './comp/home';
import Index from './comp/index';
import Register from './comp/register';
import Login from './comp/login';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/index' element={<Index />} />
              <Route path='/register' element={<Register />} />
              <Route path='/Login' element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
