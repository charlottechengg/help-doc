import React, {useState, useEffect} from 'react';
import { Button, Grid, IconButton, Box } from '@mui/material';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';
import ResultBox from './ResultBox';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const Dashboard = (props)  => {
    const {text, language} = props

    const [translatedText, setTranslatedText] = useState('')


    return (
        <>
            <Grid justify="space-evenly" alignItems="stretch" justifyContent='center' container spacing={5}>
                <Grid item xs={5} >
                    <ResultBox text = {text} type = "Trascription"/>
                </Grid>
                <Grid item xs = {1} >
                    <DoubleArrowIcon className="arrowIcon" sx={{ fontSize: 40 }}/>
                </Grid>
                <Grid item xs={5}>
                    <ResultBox text = {translatedText} type = "Translation"/>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
