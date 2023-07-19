import { Card, Stack, Grid } from '@mui/material';
import { DescriptionBox } from './DescriptionBox';

export const ContactMe = () => {
  return (
    <Grid alignItems="center">
      {/* <DescriptionBox title="PHONE" description="+61 402 778 333" /> */}
      {/*TODO: link to mailto:*/}
      <DescriptionBox title="EMAIL" description="vanessa.wyx@outlook.com" />
      <DescriptionBox
        title="LINKED IN"
        description="https://www.linkedin.com/in/vanessawongyx/"
      />
    </Grid>
  );
};
