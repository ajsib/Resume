// ./components/PortfolioDoc.tsx

// import { Typography } from '@mui/material';
// import IntroText from './PortfolioDocComponents/IntroText';
// import PhotoReel from './PortfolioDocComponents/PhotoReel';
// import other components here

import SkillsSection from './PortfolioDocComponents/Skills/SkillsSection';
import EducationSection from './PortfolioDocComponents/Education/EducationSection';
import ExperienceSection from './PortfolioDocComponents/Experience/ExperienceSection';
import ProjectSection from './PortfolioDocComponents/Projects/ProjectSection';
import AchievementsSection from './PortfolioDocComponents/AchievementsSection';
import ContactSection from './PortfolioDocComponents/ContactSection';
import ResumeDownload from './PortfolioDocComponents/ResumeDownload';
import PhotoSlide from './PortfolioDocComponents/PhotoSlide'
import React, {ReactNode} from 'react';
import { Paper, Box, PaperProps } from '@mui/material';
import { styled } from '@mui/system';

const ScrollContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  flex: '1 1 auto',
  padding: theme.spacing(2),
}));

interface PortfolioDocProps {
  children : ReactNode;
}

const PortfolioDoc = ({ children }: PortfolioDocProps) => {
  // ...
  return (
    <ScrollContainer elevation={3}>
      {/* <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        Portfolio
      </Typography>
      <IntroText />
      <PhotoReel />
      {/* add more components as necessary */}
      <PhotoSlide />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectSection />
      <AchievementsSection />
      <ContactSection />
      <ResumeDownload />
      {/* ADD REMAINDER */}
      
      
      
      
      {children}
    </ScrollContainer>
  );
};

export default PortfolioDoc;