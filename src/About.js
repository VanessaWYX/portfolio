import { Box, Grid, Typography } from '@mui/material';
import { EducationHistory } from './EducationHistory';

export default function About() {
  return (
    <Grid
      container
      alignItems="center"
      sx={{ flexDirection: 'column' }}
      rowSpacing={2}
      width="100%"
      maxWidth="100%"
      padding={{ md: 8, sm: 1 }}
      margin={0}
    >
      <Grid item width="100%" padding={2} margin={0}>
        <Typography textAlign="center" variant="h3">
          A little about myself
        </Typography>
      </Grid>
      <Grid item width="100%" padding={2} margin={0}>
        <Typography textAlign="center" variant="body1" width="100%">
          I came from Malaysia where it is known for its multicutural and
          delicious cuisine from multi-ethnic that makes up the population.
        </Typography>
      </Grid>
      <Box display="flex" width="100%" justifyContent="center">
        <div className="responsive-iframe-container">
          <iframe
            className="responsive-iframe"
            title="About me"
            src="https://maps.google.com/maps?q=Kota%20Kinabalu+(Home%20town)&amp;output=embed"
          ></iframe>
        </div>
      </Box>
      <Grid item width="100%" padding={2} marginTop={8}>
        <Typography textAlign="center" variant="body1" width="100%">
          I moved to Australia in 2018 to pursue my course of interest at
          Swinburne University, Melbourne and proudly graduated as <br />a
          Bachelor of Engineering (Software) (Honours) (Professional) in 2022.
        </Typography>
      </Grid>

      <Grid item width="100%" padding={2} margin={0}>
        <EducationHistory />
      </Grid>
    </Grid>
  );
}
