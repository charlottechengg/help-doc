import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <div className="page">
                <Header/>
                <img src={'../../introduction.png'} alt="introduction" className="backgroundImage" />
                <Footer/>
        </div>
    );
};

export default Introduction;
