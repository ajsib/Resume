// ./components/AvatarButton.tsx
import { IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import React, {useRef} from 'react';

const AvatarButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorEl(document.querySelector('#avatar-button'));
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <IconButton id="avatar-button" color="inherit" onClick={handleMenuOpen}>
        <Avatar src="/avatar.png" alt="Avatar" />
      </IconButton>
      {typeof document !== 'undefined' && (
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
      )}
    </>
  );
};

export default AvatarButton;

