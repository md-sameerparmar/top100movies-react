import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {

  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route index element={<Dashboard />}/>
          <Route path='/movie/*' element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
