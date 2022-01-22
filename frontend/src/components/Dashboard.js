import React, {useState} from 'react';
import { Button, Grid, IconButton, Box } from '@mui/material';
import Dropdown from './Dropdown';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';
import ResultBox from './ResultBox';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '50rem',
    height: '50rem',
  };

const Dashboard = (props)  => {
    const {text} = props

    return (
        <>

            <Box sx={{ ...commonStyles, border: 1 }}>{text}</Box>
            <Grid justify="space-between" alignItems="center" container>
                <Grid item>
                    <ResultBox/>
                </Grid>
                <Grid item>
                    <Button onClick={()=>{console.log("disable")}}>{'Start'}</Button>
                </Grid>
                <Grid item>
                    <ResultBox/>
                </Grid>
            </Grid>
      </>
    );
};

export default Dashboard;
