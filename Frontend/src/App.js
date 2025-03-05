import React from 'react';
import Signup from './component/Signup';
import Login from './component/Login';
import Converter from './component/Converter';
import About from './component/About';
import Contact from './component/Contact';
import { Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
export default function App() {
  return (
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/converter' element={<Converter />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Navbar'element={<Navbar/>}/>
        </Routes>
      </div>
  );
}
