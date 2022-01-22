import React from 'react';
import { Button, Grid, IconButton } from '@mui/material';
import Dropdown from './Dropdown';
const Dashboard = ()  => {
    return (
        <Grid justify="space-between" alignItems="center" container>
            <Grid item>
                <Dropdown/>
            </Grid>
            <Grid item>
                        <Button>Add</Button>
            </Grid>
            <Grid item>
                        <Button>Translate</Button>
                    </Grid>
        </Grid>
    );
};

export default Dashboard;
