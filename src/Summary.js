import { Typography, Box } from '@mui/material';

export default function Summary() {
  return (
    <Box display="flex" flex={1} flexDirection="column">
      <Typography variant="h3" textAlign="center">
        Welcome to my space!
      </Typography>
      <Typography variant="h6" textAlign="center">
        I am Vanessa.
      </Typography>
      <Typography paragraph variant="body1" textAlign="center">
        A highly motivated junior developer passionate in multiplatform mobile
        development and eager of delivering high-quality solutions for
        innovative projects.
      </Typography>
    </Box>
  );
}
