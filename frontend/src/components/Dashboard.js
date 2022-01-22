import React, {useState} from 'react';
import { Button, Grid, IconButton } from '@mui/material';
import Dropdown from './Dropdown';


const Dashboard = ()  => {
    const [isRecording, setRecording] = useState(false)
    const [text, setText] = useState('')

    return (
        <Grid justify="space-between" alignItems="center" container>
            <Grid item>
                <Dropdown/>
            </Grid>
            <Grid item>
                <Button onClick={() => {setRecording(!isRecording)}}>{isRecording? 'Stop' : 'Start'}</Button>
            </Grid>
            <Grid item>
                <Button>Translate</Button>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
