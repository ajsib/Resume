import { Grid, Typography, Paper } from '@mui/material';
import LogoButton from '../LogoButton';

const SkillsDrop = ({ skills, category, selectedSkill, handleClick, description }) => {
  return (
    <>
      <Typography variant="h6" component="h2" gutterBottom>
        {category}:
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <Grid item key={skill.name}>
            <LogoButton 
              name={skill.name} 
              logo={skill.logo} 
              onClick={() => handleClick(category, skill.name, skill.description)} 
            />
          </Grid> 
        ))}
      </Grid>
      {selectedSkill.category === category && 
        <Paper variant="outlined" style={{ backgroundColor: '#f5f5f5', marginTop: '20px' }}>
          <Typography variant="h6">{selectedSkill.skill}</Typography>
          <Typography variant="body1">{description[category]}</Typography>
        </Paper>
      }
    </>
  );
};

export default SkillsDrop;
