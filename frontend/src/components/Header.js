import React from 'react';
import { AppBar, Button, Toolbar, IconButton, Grid } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';


const Header = ()  => {
    // const history = useHistory();
    // const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid justify="space-between" alignItems="center" container>
                    <Grid item>
                    <IconButton aria-label="Mic" component="span">
                        <MicIcon />
                    </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
