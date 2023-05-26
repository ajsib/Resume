// ./components/AvatarButton.tsx
import { IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const AvatarButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
  const target = event.currentTarget as HTMLElement;
  setAnchorEl(target);
  setMenuOpen(true);
};




  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleMenuOpen}>
        <Avatar src="/avatar.png" alt="Avatar" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        <MenuItem onClick={handleMenuClose}>About</MenuItem>
        <MenuItem onClick={handleMenuClose}>Documents</MenuItem>
      </Menu>
    </>
  );
};

export default AvatarButton;

