import React from 'react';
import { Autocomplete } from '@mui/material';
const Footer = () => {
    return ()
    <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />
    />
    )
};


export default Footer;
