import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
} from '@mui/material';

const jobs = [
  {
    position: 'Full Stack Software Engineer',
    company: 'Compass Education',
    date: 'March 2023 to Present',
    isPresent: true,
    companyDescription:
      'A school management platform that helps engage parent experience and ease administration pressure.',
    scopes: [
      'Refactored code structure and endpoints to improve application performance.  ',
      'Worked collaboratively with stakeholders to scope and design to  uplift a module to increase customer engagement with the mobile apps.',
      'Planned and scheduled meetings to scope requirements, demonstrate outcomes and address critical feedback.',
      'Resolved pipeline issues voluntarily in order to minimise release  pressure in the team and documented issues on the wiki.',
      'Utilised technology such as Firebase Crashlytics and Remote Config  to control the release percentage of a new feature and log user events in order to visualise feature usage.',
      'Contributed to new design system by adding new components during development.',
    ],
  },
  {
    position: 'Graduate Software Engineer',
    company: 'Compass Education',
    date: 'March 2022 to March 2023 (1 year)',
    isPresent: false,
    companyDescription:
      'A school management platform that helps engage parent experience and ease administration pressure.',
    scopes: [
      'Familiarized the Compass platform with different technologies such as ASP Net, React, Micro-frontend, and worker services.',
      'Engaged actively with team and sprint activities such as sprint planning and sprint retrospective.',
      'Challenged myself to move to a team where leadership and resources were lacking hence, maximising my graduate program learning curve.',
      'Improved developer experience by documenting workstation setup and common workflows on Confluence voluntarily.',
      "Worked collaborativley with different teams to understand different Compass modules' workflow in order to resolve/debug issues.",
      'Contributed to new design system by adding new components during development.',
    ],
  },
  {
    position: 'Final Year Project',
    company: 'Pai Studio',
    date: 'March 2021 to December 2021 (10 months)',
    isPresent: false,
    companyDescription:
      'Customer Appointment & Management Mobile Application for a music studio.',
    scopes: [
      'Documented and finalised project plan and software requirement specifications, user manual.',
      'Set up Trello boards and made cards for the whole team to keep track of project progress.',
      'Self-motivated to restructure database design with Firebase.',
      'Ran and test all applications on Android Emulator and iPhone, and constantly improved on the prototype.',
      'Managed pull requests and merge conflicts on GitHub.',
      'Generated APKs to install on Android devices for final submission.',
      'Assisted team with bug fixing and volunteered for unassigned Trello cards to ensure project completion.',
    ],
  },
  {
    position: 'Technology Officer (Placement)',
    company: 'Monash Tech School',
    date: 'January 2020 - January 2021 (1 year)',
    isPresent: false,
    companyDescription:
      'A Victorian STEM Excursion school for secondary school students access to cutting edge technologies.',
    scopes: [
      'Assisted in the use of the technologies such as iPads, laptops, desktops, 3D printers, Laser Cutting Machine and Virtual Reality.',
      'Maintained and managed ICT assets such as laptops, iPads, smartphones, and other electronics appliances.',
      'Supported staff and students with ICT support.',
      'Facilitated students during STEM onsite and online programs.',
      'Assisted and built sub-webpages on the school domain website for internal and external stakeholders.',
      'Worked with partner schools to present machine-learning concepts and real-world examples.',
    ],
    fullRow: true,
    project: {
      name: 'VicPhysics Teachers’ Conference 2021',
      scopes: [
        'Worked independently to build a virtual conference website from scratch on Wix.',
        'Worked closely with the client without supervision and provided technical solutions.',
        'Categorised all conference data and populated them on the website.',
        'Handled approximately 200 attendees browsing the website.',
        'Created member and non-member permission for accessing exclusive information.',
        'Improved website loading speed for at least 10s by distributing multiple huge datasets into separate pages.',
        'Worked as a help desk and resolved attendees’ issues on the spot through phone, forum and live chat.',
      ],
    },
  },
];
export const CareerHistory = () => {
  return (
    <Grid
      container
      wrap="wrap"
      alignItems="center"
      sx={{ flexDirection: 'column' }}
      rowSpacing={2}
      width="100%"
      maxWidth="100%"
      padding={{ lg: 8, md: 8, sm: 2, xs: 2 }}
      margin={0}
      rowGap={4}
    >
      <Grid item md={12} width="100%" padding={2} margin={0}>
        <Typography textAlign="center" variant="h3">
          En-route to A Full Stack Developer
        </Typography>
      </Grid>
      {jobs.map((job, index) => {
        return (
          <Box
            display="flex"
            width="100%"
            maxWidth="100%"
            alignItems="center"
            key={`career-history-${index}`}
          >
            <Card sx={{ padding: 4, width: '100%' }}>
              <Stack
                direction={{ sm: 'column', xs: 'column', md: 'row', lg: 'row' }}
                justifyContent={{
                  sm: 'column',
                  xs: 'column',
                  md: 'space-between',
                  lg: 'space-between',
                }}
                paddingY={1}
                rowGap={1}
              >
                <Typography variant="h5">{job.position}</Typography>
                <Chip
                  label={job.date}
                  size="small"
                  color={job.isPresent ? 'primary' : 'default'}
                  sx={{ width: 'fit-content', padding: 1 }}
                ></Chip>
              </Stack>
              <Typography
                variant="h5"
                style={{ color: job.isPresent ? '#1976d2' : '000000' }}
              >
                {job.company}
              </Typography>
              <Typography variant="body2">{job.companyDescription}</Typography>
              <Box padding={1}></Box>
              <Box paddingX={2}>
                {job.scopes.map((scope, index) => {
                  return (
                    <Typography
                      variant="body2"
                      sx={{
                        display: 'list-item',
                        listStyle: 'disc',
                      }}
                      key={`job-scopes-${index}`}
                    >
                      {scope}
                    </Typography>
                  );
                })}
              </Box>
            </Card>
          </Box>
        );
      })}
      {/* {job.fullRow && (
        <Box display="flex">
          <Card sx={{ padding: 2 }}>
            <Typography variant="h5">{job.project.name}</Typography>
            <Box padding={1}>
              {job.project.scopes.map((scope) => {
                return (
                  <Typography
                    variant="body2"
                    sx={{ display: 'list-item', listStyle: 'disc' }}
                  >
                    {scope}
                  </Typography>
                );
              })}
            </Box>
          </Card>
        </Box>
      )} */}
    </Grid>
  );
};
