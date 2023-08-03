import {
  Card,
  Box,
  Stack,
  Typography,
  List,
  ListItemText,
  Chip,
} from '@mui/material';

const eduHistory = [
  {
    university: 'Swinburne University of Technology',
    course: `Bachelor of Engineering (Software) (Honours) (Professional)`,
    year: 'February 2018 to December 2021',
    description:
      'Awarded with Swinburne Scholarship by maintaining GPA at average 3.90.' +
      ' | Before entering my last year of degree, I transfered to Professional degree as I applied for a year of placement at Monash Tech School as a Technology officer.',
  },
  {
    university: 'Curtin University, Malaysia',
    course:
      'Bachelor of Engineering (First year) & | Foundation in Engineering & Science',
    year: 'February 2016 to December 2017',
    description:
      'Awarded with 4 Letter of recomendations from Faculty of Engineering throughout my studies at Curtin.' +
      ' | After completing my first year of bachelor degree, I decided to pursue my interest in Software at Swinburne University.',
  },
];
export const EducationHistory = () => {
  return (
    <Stack
      display="flex"
      sx={{
        flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
      }}
      justifyContent="space-between"
      alignItems="stretch"
      rowGap={{ xs: 4, sm: 4, md: 4, lg: 2 }}
      columnGap={{ xs: 2, sm: 2, md: 2, lg: 4 }}
    >
      {eduHistory.map((edu, index) => {
        const descriptionList = edu.description.split(' | ');
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
          <Box display="flex" flex={1} key={`edu-history-${index}`}>
            <Card
              key={edu.year}
              sx={{ padding: { xs: 4, sm: 4, md: 8, lg: 8 } }}
            >
              <Typography variant="h4" sx={{ paddingY: 1 }}>
                {edu.university}
              </Typography>
              <Box sx={{ paddingTop: 1 }}>
                {edu.course.split(' | ').map((courseInfo, index) => {
                  return (
                    <Typography
                      variant="subtitle1"
                      key={`course-info-${index}`}
                    >
                      {courseInfo}
                    </Typography>
                  );
                })}
              </Box>
              <Box sx={{ paddingBottom: 1 }}>
                <Chip
                  label={edu.year}
                  size="small"
                  color="primary"
                  sx={{ width: 'fit-content', padding: 1 }}
                ></Chip>
              </Box>
              <List>{desc}</List>
            </Card>
          </Box>
        );
      })}
    </Stack>
  );
};
