import React from 'react';
import { Button, Grid, IconButton } from '@mui/material';

const Dashboard = ()  => {
    return (
        
                <Grid justify="space-between" alignItems="center" container>
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
