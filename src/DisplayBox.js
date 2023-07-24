import React from 'react';

import { Grid, Tooltip } from '@mui/material';
import woman from '../src/assets/woman.png';
import Summary from './Summary';
export default function DisplayBox() {
  return (
    <Grid
      container
      wrap="wrap"
      alignItems="center"
      sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      rowSpacing={2}
    >
      <Grid item xs={6} md={6}>
        <Tooltip title="Girl stickers created by Stickers - Flaticon">
          <img src={woman} alt="woman" width="100%"></img>
        </Tooltip>
      </Grid>
      <Grid item xs={6} md={6} maxWidth="100%">
        <Summary />
      </Grid>
    </Grid>
  );
}
