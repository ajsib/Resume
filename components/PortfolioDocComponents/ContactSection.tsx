import React from 'react';

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContactSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion expanded={expanded === 'contact'} onChange={handleAccordionChange('contact')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="contact-content"
        id="contact-header"
        sx={{
          '&:hover': {
            backgroundColor: '#f5f5f5',
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <ContactMailIcon sx={{ fontSize: '2.5rem', color: '#E91E63', mr: 1 }} />
        {!expanded ? (
          <Typography variant="h4" component="h2">
            Contact
          </Typography>
        ) : null}
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
        <Typography>
          Email: john.doe@example.com
          <br />
          Phone: (123) 456-7890
          <br />
          Address: 123 Main Street, City, Country
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ContactSection;
