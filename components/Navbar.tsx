// ./components/Navbar.tsx

import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import AvatarButton from './AvatarButton';
import { useState } from 'react';

const Navbar = () => {
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

  const handleAvatarMenuOpen = () => {
    setAvatarMenuOpen(true);
  };

  const handleAvatarMenuClose = () => {
    setAvatarMenuOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
        </div>
        <AvatarButton onClick={handleAvatarMenuOpen} />
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
