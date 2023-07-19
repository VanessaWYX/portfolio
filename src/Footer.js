import {
  Card,
  CardContent,
  IconButton,
  Grid,
  Stack,
  Typography,
  Unstable_Grid2,
} from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contacts = [
  {
    name: 'linkedIn',
    icon: 'LinkedInIcon',
    component: <LinkedInIcon color="primary" />,
    url: 'https://www.linkedin.com/in/vanessawongyx/',
  },
  {
    name: 'email',
    icon: 'EmailIcon',
    component: <EmailIcon />,
    url: 'mailto:vanessawyx@outlook.com',
  },
];

function Footer() {
  return (
    <Grid
      container
      justifyContent="center"
      flexDirection="column"
      padding={10}
      marginTop={10}
    >
      <Typography textAlign="center">
        Designed and Developed by Vanessa
      </Typography>

      <Stack flex={1} flexDirection="row" justifyContent="center">
        {Contacts.map((contact) => {
          return (
            <IconButton key={contact.name} color="primary">
              {contact.component}
            </IconButton>
          );
        })}
      </Stack>
    </Grid>
  );
}

export default Footer;
