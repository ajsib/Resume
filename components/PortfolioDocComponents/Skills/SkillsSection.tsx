// SkillsSection.tsx
import React, { useState } from 'react';
import { 
  Accordion, AccordionSummary, AccordionDetails, Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildIcon from '@mui/icons-material/Build';
import PublicIcon from '@mui/icons-material/Public';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AdjustIcon from '@mui/icons-material/Adjust';
import DescriptionIcon from '@mui/icons-material/Description';
import SkillsComp from './SkillsComp';

const SkillsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({ category: '', skill: '' });
  const [description, setDescription] = useState({ language: '', software: '', softSkill: '' });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = (category, skillName, description) => {
    if (selectedSkill.category === category && selectedSkill.skill === skillName) {
      setSelectedSkill({ category: '', skill: '' });
      setDescription(prevState => ({ ...prevState, [category]: '' }));
    } else {
      setSelectedSkill({ category, skill: skillName });
      setDescription(prevState => ({ ...prevState, [category]: description }));
    }
  };

const languages = [
  {
    name: 'Python',
    description: 'Proficient in Python programming with extensive experience in developing scalable and efficient applications. Skilled in data manipulation, analysis, and visualization using popular libraries such as NumPy, Pandas, and Matplotlib. Familiar with web development frameworks like Django and Flask.',
    logo: '/logos/python.png'
  },
  {
    name: 'Java',
    description: 'Experienced Java developer with a strong foundation in object-oriented programming. Proficient in designing and implementing robust and scalable applications. Skilled in developing backend systems, enterprise applications, and Android applications. Familiar with frameworks like Spring and Hibernate.',
    logo: '/logos/java.png'
  },
  {
    name: 'C',
    description: 'Proficient in C programming with expertise in low-level system programming. Strong understanding of memory management, pointers, and data structures. Experienced in developing efficient algorithms and optimizing code for performance.',
    logo: '/logos/C.png'
  },
  {
    name: 'Bash',
    description: 'Skilled in Bash scripting for automating tasks, system administration, and managing Linux environments. Proficient in writing shell scripts to streamline workflows, perform data processing, and automate routine tasks. Experienced in creating complex scripts to handle system configurations and deployments.',
    logo: '/logos/bash.png'
  },
  {
    name: 'x86',
    description: 'Proficient in x86 assembly language programming with a strong understanding of computer architecture. Skilled in writing optimized and efficient assembly code for performance-critical applications. Experienced in working with low-level hardware interfaces and embedded systems.',
    logo: '/logos/x86.png'
  },
  {
    name: 'Prolog',
    description: 'Experienced Prolog developer with knowledge in logic programming and declarative problem-solving. Skilled in writing logical rules, reasoning, and building expert systems. Proficient in developing applications for artificial intelligence and knowledge representation.',
    logo: '/logos/prolog.png'
  },
  {
    name: 'LaTex',
    description: 'Proficient in typesetting documents using LaTeX for high-quality and professional-looking output. Experienced in creating scientific papers, reports, and technical documents with complex mathematical equations, tables, and figures. Skilled in customizing templates and styles for specific requirements.',
    logo: '/logos/latex.png'
  },
  {
    name: 'Git',
    description: 'Proficient in version control with Git and GitHub for collaborative software development. Experienced in managing repositories, branching, merging, and resolving conflicts. Skilled in working with distributed teams, code review processes, and maintaining a structured development workflow.',
    logo: '/logos/git.png'
  }
];



const softwares = [
  { name: 'Linux', logo: '/logos/ubuntu.png', description: 'Linux is an open-source operating system known for its stability, security, and versatility. It is widely used in various domains, including server administration, software development, and embedded systems.' },
  { name: 'Microsoft Office', logo: '/logos/office.png', description: 'Microsoft Office is a suite of productivity applications that includes programs like Word, Excel, PowerPoint, and Outlook. It is widely used for creating, editing, and managing documents, spreadsheets, presentations, and emails.' },
  { name: 'KNIME', logo: '/logos/knime.png', description: 'KNIME is an open-source data analytics platform that allows users to visually design, execute, and deploy data workflows. It provides a wide range of tools for data integration, transformation, mining, and visualization.' },
  { name: 'OpenAI', logo: '/logos/openai.png', description: 'OpenAI is an artificial intelligence research organization that aims to develop and promote friendly AI that benefits all of humanity. It is known for its contributions in the field of natural language processing, reinforcement learning, and generative models.' },
  // Add more software entries as needed
];



const softSkills = [
    { name: "Public Speaking", logo: <PublicIcon />, description: "Public Speaking description here" },
    { name: "Collaboration", logo: <GroupWorkIcon />, description: "Collaboration description here" },
    { name: "Leadership", logo: <PeopleAltIcon />, description: "Leadership description here" },
    { name: "Dedication", logo: <EmojiObjectsIcon />, description: "Dedication description here" },
    { name: "Adaptive to adversity", logo: <AdjustIcon />, description: "Adaptive to adversity description here" },
    { name: "Writing", logo: <DescriptionIcon />, description: "Writing description here" },
  ];



  return (
    <Accordion expanded={expanded === 'skills'} onChange={handleAccordionChange('skills')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="skills-content"
        id="skills-header"
        sx={{
          '&:hover': {
            backgroundColor: '#f5f5f5',
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <BuildIcon sx={{ fontSize: '2.5rem', color: '#9C27B0', mr: 1 }} />
        {!expanded ? (
          <Typography variant="h4" component="h2">
            Skills
          </Typography>
        ) : null}
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
        <SkillsComp
          languages={languages}
          softwares={softwares}
          softSkills={softSkills}
          handleClick={handleClick}
          selectedSkill={selectedSkill}
          description={description}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default SkillsSection;
