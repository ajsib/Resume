import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import ExperienceTimeline from './Timeline';

const ExperienceSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const experiences = [
    {
      id: 'cafi',
      period: 'April 2021 - Present',
      title: 'Canadian Armed Forces Infantry Reservist',
      logo: '/logos/cafi.png', // Add the path to the logo
      events: [
        {
          date: 'May 2021 - Jun 2021',
          description: 'Completed BMQ (Basic Military Qualification) course.'
        },
        {
          date: 'June 2022 - August 2022',
          description: 'Completed DP1 Infantry Course'
        }
      ]
    },
    {
      id: 'rcss',
      period: 'October 2019 - April 2021',
      title: 'Real Canadian Superstore',
      logo: '/logos/rcss.png', // Add the path to the logo
      events: [
        {
          date: 'May 2021 - Jun 2021',
          description: 'Description 1'
        },
        {
          date: 'June 2022 - August 2022',
          description: 'Description 2'
        }
      ]
    }
  ];

  return (
    <Accordion expanded={expanded === 'experience'} onChange={handleAccordionChange('experience')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="experience-content"
        id="experience-header"
        sx={{
          '&:hover': {
            backgroundColor: '#f5f5f5',
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <WorkIcon sx={{ fontSize: '2.5rem', color: '#8BC34A', mr: 1 }} />
        {!expanded ? (
          <Typography variant="h4" component="h2">
            Experience
          </Typography>
        ) : null}
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
        <ExperienceTimeline experiences={experiences} />
      </AccordionDetails>
    </Accordion>
  );
};

export default ExperienceSection;
