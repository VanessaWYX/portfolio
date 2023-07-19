import { ListItem, Grid, Typography } from '@mui/material';

function About() {
  return (
    <Grid display="flex" flexDirection="column" margin={5} padding={10}>
      <ListItem sx={{ justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant="body1" sx={{ flex: 1, alignSelf: 'flex-start' }}>
          Where I am from
        </Typography>
        <iframe
          title="About me"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          width="50%"
          height={450}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kota%20Kinabalu+(Home%20town)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </ListItem>
    </Grid>
  );
}

export default About;
