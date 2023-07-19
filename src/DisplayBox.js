import React from 'react';

import { Grid, Tooltip } from '@mui/material';
import woman from '../src/assets/woman.png';
import Summary from './Summary';
export default function DisplayBox() {
  return (
    <Grid display="flex" flex={1} alignItems="center">
      <Tooltip title="Girl stickers created by Stickers - Flaticon">
        <img src={woman} alt="woman" width="60%"></img>
      </Tooltip>
      <Summary />
    </Grid>
  );
}
