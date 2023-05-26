import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const GithubHeader = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="github"
          href="https://github.com/yourGithubUsername" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ 
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
          <Typography>
            /ajsib
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default GithubHeader;
