import { Box, Grid } from '@mui/material';
import React from 'react';
import Summary from './Summary';

export default function Home() {
  return (
    <Grid alignContent="center">
      <Box height={500}></Box>
      <Summary />
    </Grid>
  );
}
