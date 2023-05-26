// LogoButton.tsx
import { Button, Tooltip } from '@mui/material';

const LogoButton = ({ name, logo, onClick }) => {
  const logoStyle = {
    width: "50px",
    height: "50px",
    backgroundSize: "cover",
    backgroundImage: `url(${logo})`,
    borderRadius: "50%",
  };

  return (
    <Tooltip title={name} arrow>
      <Button onClick={onClick} style={{ padding: "10px" }}>
        {typeof logo === 'string' ? <div style={logoStyle}></div> : logo}
      </Button>
    </Tooltip>
  );
};

export default LogoButton;
