import React, {useState, useEffect} from 'react';
import { Button, Grid, IconButton, Box } from '@mui/material';
import ResultBox from './ResultBox';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const Dashboard = (props)  => {
    const {text, language} = props

    const [translatedText, setTranslatedText] = useState('')

    const API_KEY = "AIzaSyB8DAdld6FzRvkc3CUxJs6wdDYlHLmeHWo";

    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += '&q=' + encodeURI(text);
    url += `&source=${'en'}`;
    url += `&target=${language}`;

    fetch(url, { 
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
    .then(res => res.json())
    .then((response) => {
        console.log("response from google: ", response.data.translations[0].translatedText);
        setTranslatedText(response.data.translations[0].translatedText)
    })
    .catch(error => {
        console.log("There was an error with the translation request: ", error);
    });

    return (
        <>
            <Grid justify="space-evenly" alignItems="stretch" justifyContent='center' container spacing={5}>
                <Grid item xs={5} >
                    <ResultBox text = {text} type = "Transcription"/>
                </Grid>
                <Grid item xs = {0.5} >
                    <DoubleArrowIcon className="arrowIcon" sx={{ fontSize: 50 }}/>
                </Grid>
                <Grid item xs={5}>
                    <ResultBox text = {translatedText} type = "Translation"/>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
