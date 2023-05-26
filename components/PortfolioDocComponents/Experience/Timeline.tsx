import React, { useState } from 'react';
import { Typography, Collapse, Box, CardMedia } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';

const ExperienceTimeline = ({ experiences }) => {
  const [openTimeline, setOpenTimeline] = useState({});

  const handleTimelineOpen = (id) => {
    setOpenTimeline({ ...openTimeline, [id]: !openTimeline[id] });
  };

  return (
    <Timeline>
      {experiences.map(({ id, period, title, logo, events, image, imageCaption }) => (
        <TimelineItem key={id}>
          <TimelineOppositeContent>
            <Typography color="textSecondary">{period}</Typography>
            {openTimeline[id] && 
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <CardMedia component="img" image={image} sx={{ width: '100px', height: '100px', borderRadius: '5px' }} />
                <Typography variant="caption" color="textSecondary">{imageCaption}</Typography>
              </Box>
            }
          </TimelineOppositeContent>
          <TimelineSeparator>
            <WorkIcon color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography 
              variant="h6" 
              component="p" 
              gutterBottom 
              onClick={() => handleTimelineOpen(id)}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform .2s',
                },
              }}
            >
              <Box component="span" fontStyle="italic">
                <img src={logo} alt="Job Logo" style={{ height: '20px', marginRight: '8px' }} />
                {title}
              </Box>
            </Typography>
            <Collapse in={openTimeline[id]}>
              <Timeline>
                {events.map(({ date, description }) => (
                  <TimelineItem key={date}>
                    <TimelineOppositeContent>
                      <Typography color="textSecondary">{date}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <StarIcon style={{ color: 'gold' }} />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="body1" component="p" gutterBottom>
                        {description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Collapse>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
