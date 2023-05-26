// ./components/Navbar.tsx

import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
        </div>
        <div>
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
        </div>
        <div>
          <Link href="/resume" passHref>
            <Button color="inherit">Resume</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
