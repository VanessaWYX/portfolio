import { ListItem, Grid, List, ListItemText } from '@mui/material';
import { EducationHistory } from './EducationHistory';

export default function About() {
  return (
    <Grid display="flex" margin={5}>
      <List>
        <ListItem display="flex" sx={{ paddingBottom: 10, flex: 2 }}>
          <ListItemText display="flex" sx={{ flex: 1 }}>
            A little about myself. I came from Malaysia where it is known for
            its multicutural and delicious cuisine from multi-ethnic that makes
            up the population.
          </ListItemText>
          <div className="responsive-iframe-container">
            <iframe
              className="responsive-iframe"
              title="About me"
              src="https://maps.google.com/maps?q=Kota%20Kinabalu+(Home%20town)&amp;output=embed"
            ></iframe>
          </div>
        </ListItem>
        <ListItem>
          <ListItemText>
            I moved to Australia in 2018 to pursue my course of interest at
            Swinburne University, Melbourne and proudly graduated as a Bachelor
            of Engineering (Software) (Honours) (Professional) in 2022.
          </ListItemText>
        </ListItem>
        <ListItem>
          <EducationHistory />
        </ListItem>
      </List>
    </Grid>
  );
}
