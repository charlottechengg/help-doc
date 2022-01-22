import React, { useState, ReactElement } from 'react';


import ThemeProvider from '@mui/styles/ThemeProvider';
import theme from './styles/theme';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <p> 
      <Header/>
      <Dashboard/>
      <Footer/>
    </p>
  );
};


export default App;
