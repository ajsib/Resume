// UniversityEducation.tsx
import React, { useState } from 'react';
import { AccordionDetails, Box, Typography, Divider } from '@mui/material';

const UniversityEducation = ({ expanded }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        sx={{
          backgroundColor: '#042353',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
          cursor: 'pointer',
          height: '100px',
        }}
      >
        {/* Replace with your university logo */}
        <img
          src="/logos/queens.png"
          alt="University Logo"
          style={{
            height: isHovered ? '60px' : '50px',
            transition: 'height .2s',
            fill: '#FFFFFF',
          }}
        />
      </Box>
      {expanded === 'education' && isTextVisible && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" component="p" gutterBottom>
            <Box component="span" fontStyle="italic">2021 - Present:</Box> BcmpH Specialization in Computer Science with AI option, Queen’s University
          </Typography>
          <Divider sx={{ borderColor: '#782F40', borderWidth: 2, my: 2 }}/>
          <Typography variant="h6" component="p" gutterBottom>
            <Box component="span" fontStyle="italic">2021 - Present:</Box> Data Analytics Certificate Plan, Queen’s University
          </Typography>
        </Box>
      )}
    </AccordionDetails>
  );
};

export default UniversityEducation;
