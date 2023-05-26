import SkillsDrop from './SkillsDrop';

const SkillsComp = ({ languages, softwares, softSkills, handleClick, selectedSkill, description }) => {
  return (
    <>
      <SkillsDrop 
        skills={languages} 
        category="Programming Languages" 
        handleClick={handleClick} 
        selectedSkill={selectedSkill} 
        description={description} 
      />
      <SkillsDrop 
        skills={softwares} 
        category="Softwares" 
        handleClick={handleClick} 
        selectedSkill={selectedSkill} 
        description={description} 
      />
      <SkillsDrop 
        skills={softSkills} 
        category="Soft-Skills" 
        handleClick={handleClick} 
        selectedSkill={selectedSkill} 
        description={description} 
      />
    </>
  );
};

export default SkillsComp;
