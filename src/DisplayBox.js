import React from 'react';

import { Grid, Tooltip } from '@mui/material';
import woman from '../src/assets/canva-girl.png';
import Summary from './Summary';
export default function DisplayBox() {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
      }}
      rowGap={2}
      margin={0}
      padding={{ lg: 4, md: 4, sm: 2, xs: 2 }}
      width="100%"
      maxWidth="100%"
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        width="100%"
        padding={2}
        margin={0}
      >
        <Tooltip title="Girl stickers created by Stickers - Flaticon">
          <img src={woman} alt="woman" width="100%"></img>
        </Tooltip>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        lg={7}
        width="100%"
        padding={2}
        margin={0}
      >
        <Summary />
      </Grid>
    </Grid>
  );
}
