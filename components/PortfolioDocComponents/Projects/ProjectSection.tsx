import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, CardHeader } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import GithubHeader from './GithubHeader'

const ProjectSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const projects = [
    {
      title: "Yaniv Card Game with Python Tkinter",
      description: "This card game was implemented in Python as a small deliverable in open ended design project for a logic class. Created a working model of the card game Yaniv using object oriented programming principals in conjunction with GUI windows using tkinter. The result is fully playable and fun.",
      githubLink: "https://github.com/yourGithubUsername/yourProjectLink" // replace with your project link
    }
    // Add more projects as needed
  ];

  return (
    <div>
    <Accordion expanded={expanded === 'project'} onChange={handleAccordionChange('project')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="project-content"
        id="project-header"
        sx={{
          '&:hover': {
            backgroundColor: '#f5f5f5',
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <CodeIcon sx={{ fontSize: '2.5rem', color: '#FF5722', mr: 1 }} />
        {!expanded ? (
          <Typography variant="h4" component="h2">
            Projects
          </Typography>
        ) : null}
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#f9f9f9', flexDirection: 'column' }}>
        {projects.map((project, index) => (
          <Card sx={{ marginBottom: 2 }} key={index}>
            <GithubHeader/>
            <CardHeader
              avatar={< GitHubIcon/>}
              title={project.title}
              subheader={<a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on Github</a>}
            />
            <CardContent>
              <Typography variant="body1">{project.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </AccordionDetails>
    </Accordion>
  </div>
  );
};

export default ProjectSection;
