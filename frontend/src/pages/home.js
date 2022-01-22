import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import { Grid } from '@mui/material';

const Home = () => {
    // const [] = useState(null);
    return (
        <div className="Home">
            <span>
                <Header/>
                <Dashboard/>
            </span>
            <Footer/>
        </div>
        
    )
}

export default Home;