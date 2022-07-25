import './App.css';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
     
    <Routes>
    <Route path="/" element={<Loginpage/>} />
    <Route path="/Loginpage" element={<Loginpage/>} />
    <Route path="/Registerpage" element={<Registerpage/>} />
    <Route path="/Home" element={<Home/>} />

   
    </Routes>
   
  </Router>

  )};
 export default App;
  