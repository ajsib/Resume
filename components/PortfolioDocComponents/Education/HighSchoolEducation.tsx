import React, { useState } from 'react';
import { AccordionDetails, Box, Typography, Divider } from '@mui/material';

const HighSchoolEducation = ({ expanded }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setIsTextVisible(!isTextVisible);
  };

  return (
    <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        sx={{
          backgroundColor: '#949494',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
          cursor: 'pointer',
          height: isExpanded ? 'auto' : '33%',
          transition: 'height 0.3s',
        }}
      >
              {!isExpanded ? (
          <Typography
            variant="h5"
            sx={{
              fontSize: isHovered ? '1.5rem' : '1rem',
              transition: 'font-size .2s',
            }}
          >
            <br></br>
          </Typography>
        ) : (
          <img src="/logos/highschool.png" alt="High School Logo" style={{ height: '50px', fill: '#FFFFFF' }}/>
        )}
      </Box>
      {expanded === 'education' && isTextVisible && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" component="p" gutterBottom>
            <Box component="span" fontStyle="bold">Abbey Park High School:</Box> Oakville Ontario Canada
          </Typography>
          <Divider sx={{ borderColor: '#782F40', borderWidth: 2, my: 2 }}/>
          <Typography variant="h6" component="p" gutterBottom>
            <Box component="span" fontStyle="italic">Class of 2020:</Box> Ontario Secondary School Diploma (OSSD)
          </Typography>
        </Box>
      )}
    </AccordionDetails>
  );
};

export default HighSchoolEducation;
