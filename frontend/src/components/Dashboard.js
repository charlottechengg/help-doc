import React from 'react';
import { Button, Grid, IconButton } from '@mui/material';
import Dropdown from './Dropdown';
import ResultBox from './ResultBox';

const Dashboard = ()  => {
    return (
        <Grid justify="space-between" alignItems="center" container>
            <Grid item>
                <ResultBox/>
            </Grid>
            <Grid item>
                <ResultBox/>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
