import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import UserMenu from '../components/UserMenu';

function Home() {
    return (
        <div>
            <Typography variant="h4" sx={{ mb: '20px' }}>
                Note App
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
                <UserMenu />
            </Box>

            <Grid
                container
                sx={{
                    height: '50vh',
                    boxShadow: '0 0 15px 0 rgb(193, 193, 193 / 60%)',
                }}
            >
                <Grid item xs={3} sx={{ height: '100%' }}>
                    <p>Folder list</p>
                </Grid>

                <Grid item xs={9} sx={{ height: '100%' }}>
                    <p>Note List</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
