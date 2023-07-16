import {
  AppBar,
  Container,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [currentTabIndex, setTabIndex] = useState(0);
  const handleChange = (_, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Link to="/.">VANESSA WONG</Link>
          <Link to="/.">ABOUT</Link>
          <Link to="/.">EXPERIENCE</Link>
          <Link to="/.">CONTACT</Link>
        </Toolbar>
      </Container>
    </AppBar>
  );

  return (
    <Stack>
      <Tabs value={currentTabIndex} onChange={handleChange} variant="fullWidth">
        <Tab
          label={<Typography variant="h3">VANESSA WONG</Typography>}
          tabIndex={0}
          style={{ flex: '0 0 auto' }}
        />
        <Tab label={<Typography variant="h5">About</Typography>} tabIndex={1} />
        <Tab
          label={<Typography variant="h5">Experience</Typography>}
          tabIndex={2}
        />
        <Tab
          label={<Typography variant="h5">Contact</Typography>}
          tabIndex={3}
        />
      </Tabs>
    </Stack>
  );
};
