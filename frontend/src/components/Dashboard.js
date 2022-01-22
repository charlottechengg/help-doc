import React, {useState} from 'react';
import { Button, Grid, IconButton, Box } from '@mui/material';
import Dropdown from './Dropdown';


const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '50rem',
    height: '50rem',
  };

const Dashboard = ()  => {
    const [isRecording, setRecording] = useState(false)
    const [text, setText] = useState('')

    return (
        <>
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

            <Box sx={{ ...commonStyles, border: 1 }}>Something here</Box>
        </>
    );
};

export default Dashboard;
