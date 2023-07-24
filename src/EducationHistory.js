import { Grid, Typography, List, ListItemText, Stack } from '@mui/material';

export const EducationHistory = () => {
  const eduHistory = [
    {
      university: 'Swinburne University of Technology',
      course: 'Bachelor of Engineering (Software) (Honours) (Professional)',
      year: 'February 2018 to Decemebr 2021',
      description:
        'Awarded with Swinburne Scholarship by maintaining GPA at average 3.90.' +
        '| Before entering my last year of degree, I transfered to Professional degree as I applied for a year of placement at Monash Tech School as a Technology officer.',
    },
    {
      university: 'Curtin University, Malaysia',
      course:
        'Bachelor of Engineering (First year), Foundation in Engineering & Science',
      year: 'February 2016 to Decemebr 2017',
      description:
        'Awarded with 4 Letter of recomendations from Faculty of Engineering throughout my studies at Curtin.' +
        '| After completing my first year of bachelor degree, I decided to pursue my interest in Software at Swinburne University.',
    },
  ];
  return (
    <Grid>
      {eduHistory.map((edu) => {
        const descriptionList = edu.description.split('|');
        const desc = descriptionList.map((description, index) => {
          return (
            <ListItemText
              key={`description-${index}`}
              sx={{ display: 'list-item', listStyle: 'disc' }}
            >
              {description}
            </ListItemText>
          );
        });

        return (
          <Stack key={edu.year}>
            <Typography>{edu.year}</Typography>
            <Typography>{edu.university}</Typography>
            <Typography>{edu.course}</Typography>
            <List>{desc}</List>
          </Stack>
        );
      })}
    </Grid>
  );
};
