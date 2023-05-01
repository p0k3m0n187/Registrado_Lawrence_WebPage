import React from 'react';
import NavBar from './Components/NavBar';
import {Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import Features from './Pages/Features';
import Login from './Pages/Login';
import Registration from './Pages/Registration';


function App() {
    return (
       <>
       <NavBar />
       <Routes>
       <Route path="/home" element={<HomePage />} />
       <Route path="/features" element={<Features />} />
       <Route path="/login" element={<Login />} />
       <Route path="/registration" element={<Registration />} />
       <Route path="/sign-in" element={<Login />} />
       </Routes>
       </>
    );
}

export default App;
