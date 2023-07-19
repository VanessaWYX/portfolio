import { Grid, Typography } from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export const CareerHistory = () => {
  return (
    <Grid marginTop={10}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Full Stack Software Engineer</Typography>
            <Typography>Compass Education</Typography>
            <Typography>
              A school management platform that helps engage parent experience
              and ease administration pressure.
            </Typography>
            <Typography>March 2023 to Present</Typography>
            <Typography>
              Involved in refactoring mobile code structure and endpoints to
              improve application performance and increase customer engagement
              with the mobile apps.
            </Typography>
            <Typography>
              Worked collaboratively with stakeholders to scope and design to
              uplift a module.
            </Typography>
            <Typography>
              Planned and scheduled meetings to scope requirements, demonstrate
              outcomes and address critical feedback.
            </Typography>
            <Typography>
              Resolved pipeline issues voluntarily in order to minimise release
              pressure in the team and documented issues on the wiki.
            </Typography>
            <Typography>
              Utilised technology such as Firebase Crashlytics and Remote Config
              to control the release percentage of a new feature and log user
              events in order to visualise feature usage.
            </Typography>
            <Typography>
              Contributed to new design system by adding new components during
              development.
            </Typography>
            <Typography>
              Open to new technology introduced in the code structure and
              willing to spend time to master it.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Graduate Software Engineer</Typography>
            <Typography>Compass Education</Typography>
            <Typography>March 2022 to March 2023 (1 year)</Typography>
            <Typography>
              Familiarized the Compass platform with different technologies such
              as ASP Net, React, Micro-frontend, and worker services.
            </Typography>
            <Typography>
              Engaged actively with team and sprint activities such as sprint
              planning and sprint retrospective.
            </Typography>
            <Typography>
              Challenged myself to move to a team where leadership and resources
              were lacking hence, maximising my graduate program learning curve.
            </Typography>
            <Typography>
              Improved developer experience by documenting workstation setup and
              common workflows on Confluence voluntarily.
            </Typography>
            <Typography>
              Worked collaborativley with different teams to understand
              different Compass modules' workflow in order to resolve/debug
              issues.
            </Typography>
            <Typography>
              Contributed to new design system by adding new components during
              development.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
};
