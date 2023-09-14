import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './home/Home'
import Movies from './movies/Movies'
import TvShows from './tvshow/TvShows'
import Login from './login/Login';
import Signup from './signup/Signup';

function App() {
  

  return (
    <>
      <Router>
      <div>
        <NavigationBar />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/kids" element={Kids} /> 
          <Route path="/livetv" element={LiveTV} /> 
          <Route path="/music" element={Music} />  */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
