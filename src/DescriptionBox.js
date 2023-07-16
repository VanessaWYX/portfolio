import { Box, Typography } from '@mui/material';

export const DescriptionBox = ({ title, description }) => {
  return (
    <Box>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
};
