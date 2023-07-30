import {
  Card,
  Stack,
  Grid,
  Typography,
  Box,
  IconButton,
  Icon,
} from '@mui/material';
import { DescriptionBox } from './DescriptionBox';
import { Link } from 'react-router-dom';
import FilePresentIcon from '@mui/icons-material/FilePresent';

export const ContactMe = () => {
  return (
    <Grid
      container
      sx={{ flexDirection: 'column' }}
      rowSpacing={2}
      width="100%"
      maxWidth="100%"
      padding={8}
      margin={0}
      rowGap={4}
    >
      <Grid
        item
        width="100%"
        maxWidth="100%"
        padding={2}
        margin={0}
        alignItems="center"
      >
        <Typography textAlign="center" variant="h3">
          Let's get in touch
        </Typography>
      </Grid>
      <Grid
        item
        width="100%"
        maxWidth="100%"
        padding={2}
        marginTop={8}
        sx={{
          flexDirection: {
            sm: 'column',
            xs: 'column',
            md: 'row-reverse',
          },
        }}
        display="flex"
        gap={4}
      >
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          gap={4}
          alignItems="center"
        >
          <Typography variant="body2">EMAIL</Typography>
          <Link
            onClick={(e) => {
              window.location.href = 'mailto:vanessa.wyx@outlook.com';
              e.preventDefault();
            }}
          >
            <Typography variant="body2">vanessa.wyx@outlook.com</Typography>
          </Link>
          <Typography variant="body2">LINKED IN</Typography>
          <Link
            onClick={(e) => {
              window.open(
                'https://www.linkedin.com/in/vanessawongyx/',
                'blank',
              );
              e.preventDefault();
            }}
          >
            <Typography variant="body2">vanessa.wyx@outlook.com</Typography>
          </Link>
        </Box>
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          gap={4}
          alignItems="center"
        >
          <Typography variant="body2">RESUME</Typography>
          <IconButton
            onClick={(e) => {
              window.open(
                'https://www.canva.com/design/DAFneqYJiPo/XDcos5v3x52cwa3Faq9fig/view?utm_content=DAFneqYJiPo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
                'blank',
              );
              e.preventDefault();
            }}
          >
            <FilePresentIcon sx={{ fontSize: { md: 60, sm: 45 } }} />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};
