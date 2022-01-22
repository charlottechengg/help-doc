import React from 'react';
import { AppBar, Button, Toolbar, IconButton, Grid } from '@material-ui/core';

const Header = ()  => {
    // const history = useHistory();
    // const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid justify="space-between" alignItems="center" container>
                    <Grid item>
                        <a>test</a>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
