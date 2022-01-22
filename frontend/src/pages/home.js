import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const Home = () => {
    // const [] = useState(null);
    return (
        <div className="Home">
            <Header/>
            <Dashboard/>
            <Footer/>
        </div>
    )
}

export default Home;