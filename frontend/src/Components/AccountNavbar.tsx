import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from './AccountMenu';

interface AccountNavbarProps {
    props: null;
}

const AccountNavbar: React.FC<AccountNavbarProps> = () => {

    return (
        <div className="accountnavbar-container">
    <AppBar position="static" className='navbar'>
      <Toolbar className='toolbar' style={{ justifyContent: 'center' }}>
        <Typography variant="h6" className='customButton'>
        </Typography>
        <AccountMenu props={null} />
      </Toolbar>
    </AppBar>
        </div>
    )
}

export default AccountNavbar;