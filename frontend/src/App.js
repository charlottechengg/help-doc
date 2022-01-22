import React, { useState, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import ThemeProvider from '@mui/styles/ThemeProvider';
// import theme from './styles/theme';
import './App.css';
import ErrorNotFound from './pages/Error';
import Home from './pages/Home';
// import Save from './pages/saved';


function PrivateRoute({ component: Component, ...rest }){
  return (
      <Route
          {...rest}
          render={(props) => {
                  window.localStorage.setItem('location', props?.location?.pathname);
                  return <Navigate to="/" />;
          }}
      />
  );
}

function PublicRoute({ component: Component, onUserLogin, ...rest }) {
  return (
      <Route
          {...rest}
          render={(props) => {
                  const route = window.localStorage.getItem('location') || '/';
                  window.localStorage.removeItem('location');
                  return <Navigate to={route} />;
              }
          }
      />
  );
}
const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<ErrorNotFound />} />
      </Routes>
    </Router>
  );
};


export default App;
