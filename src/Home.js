import { Box, Grid } from '@mui/material';
import React from 'react';
import Summary from './Summary';
import DisplayBox from './DisplayBox';

export default function Home() {
  return (
    <Grid margin={5} padding={10}>
      <DisplayBox />
    </Grid>
  );
}
