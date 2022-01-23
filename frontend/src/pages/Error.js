import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className="page">
                <Header/>
                <div className="page">
                    <img src={'../../error.png'} alt="error" className="backgroundImage" />
                </div>
                <h1 className="text-on-image">
                    404: Page not found
                    <br />
                </h1>
                <Footer/>
        </div>
    );
};

export default index;
