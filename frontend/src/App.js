import React, { useState, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import ThemeProvider from '@mui/styles/ThemeProvider';
// import theme from './styles/theme';
import './App.css';
import ErrorNotFound from './pages/Error';
import Home from './pages/Home';
// import Save from './pages/saved';
const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<ErrorNotFound />} />
      </Routes>
    </Router>
  );
};


export default App;
