// EducationSection.tsx
import React, { useState } from 'react';
import { Accordion, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import UniversityEducation from './UniversityEducation';
import HighSchoolEducation from './HighSchoolEducation';

const EducationSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion expanded={expanded === 'education'} onChange={handleAccordionChange('education')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="education-content"
        id="education-header"
      >
        <SchoolIcon sx={{ fontSize: '2.5rem', color: '#03A9F4', mr: 1 }} />
        {!expanded ? (
          <Typography variant="h4" component="h2">
            Education
          </Typography>
        ) : null}
      </AccordionSummary>
      <UniversityEducation expanded={expanded} />
      <HighSchoolEducation expanded={expanded} />
    </Accordion>
  );
};

export default EducationSection;
