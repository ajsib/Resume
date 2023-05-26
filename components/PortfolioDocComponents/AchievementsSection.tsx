import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { ListItemIcon, Box, List, ListItem, ListItemText } from '@mui/material';
import CircleOutlined from '@mui/icons-material/CircleOutlined'; // placeholder for organization logo


const AchievementsSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    if (isExpanded) {
      setExpanded(panel);
    } else {
      setExpanded(false);
    }
  };
  
  return (
    <Accordion expanded={expanded === 'achievements'} onChange={handleAccordionChange('achievements')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="achievements-content"
        id="achievements-header"
        sx={{
          '&:hover': {
            backgroundColor: '#f5f5f5',
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <EmojiEventsIcon sx={{ fontSize: '2.5rem', color: '#FFC107', mr: 1 }} />
        {!expanded ? (
          <Typography variant="h4" component="h2">
            Achievements
          </Typography>
        ) : null}
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
        <ListItemIcon>
    <CircleOutlined /> {/* Replace CircleOutlined with the logo you want */}
</ListItemIcon>
<Typography variant="h6" component="p" gutterBottom>
    <Box component="span" fontWeight="bold">May 2019 - February 2020:</Box> Bronze and Silver Duke of Edinburgh International Award.
</Typography>
<Typography variant="h6" component="p" gutterBottom>
    <Box component="span" fontWeight="bold">April 2018:</Box> Bay Area Science and Engineering Fair (BASEF) Canadian Nuclear Society award.
</Typography>
<Typography variant="h6" component="p" gutterBottom>
    <Box component="span" fontWeight="bold">March 2018:</Box> Service Project to Zhangjiakou China. Worked with local village to construct pigpen.
</Typography>
<Typography variant="h6" component="p" gutterBottom>
    <Box component="span" fontWeight="bold">March 2015 - November 2019:</Box> Royal Canadian Army Cadet Corps community volunteering (Rotary Club, Legion, Lions Club)
</Typography>

      </AccordionDetails>
    </Accordion>
  );
};

export default AchievementsSection;
