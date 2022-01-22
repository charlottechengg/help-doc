import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import { Grid } from '@mui/material';

const Home = () => {
    // const [] = useState(null);
    const [isRecording, setRecording] = useState(false)
    const [text, setText] = useState('')
    return (
        <div className="Home">
            <Header isRecording={isRecording} setRecording={setRecording} setText={setText}/>
            <Dashboard text={text}/>
            <Footer/>
        </div>
        
    )
}

export default Home;