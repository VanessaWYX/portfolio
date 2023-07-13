import { Box, Typography } from '@mui/material'

export const DescriptionBox = ({ title, description }) => {
  return (
    <Box
      height={60}
      direction="row"
      alignItems="center"
      textAlign="center"
      gap={4}
      bgcolor="#ffe5d6"
      padding={2}
    >
      <Typography variant="body2">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  )
}
