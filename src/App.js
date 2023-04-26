import React from 'react';
import NavBar from './Components/NavBar';
import {Routes, Route } from 'react-router-dom';
//import ListofUsers from './Pages/ListofUsers';
import Features from './Pages/Features';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';

function App() {
    return (
       <>
       <NavBar />
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/" element={<Features />} />
       </Routes>
       </>
    );
}

export default App;
