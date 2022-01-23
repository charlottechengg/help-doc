import React, { useState, useEffect } from 'react';
    import { Typography, Box, Paper } from '@mui/material';
    import { spacing } from '@mui/system';

    const ResultBox = ({text, type}) => {
        return (
            <Box display="inline-block"  sx={{
                width: 300,
                height: 300,
            }} >
            <Paper elevation={15} sx={{ p: 2, m: 2, width: '100%', height: '100%', minWidth: 550, minHeight: 600}} >
                    <Typography variant="h3" gutterBottom component="div">
                        {type}
                    </Typography>
                    <Typography key={text} variant="body1" gutterBottom>
                        {text}
                    </Typography>
                </Paper>
            </Box>
    );
}
        
export default ResultBox