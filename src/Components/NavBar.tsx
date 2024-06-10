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


const NavBar = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className='toolbar'>
        <Typography variant="h6" className='customButton' style={{fontFamily: 'monospace'}}>
          Frances Carter
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
        {isSmallScreen ? (
          <>
            <IconButton onClick={handleMenuClick} edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              classes={{ list: 'menuItemRoot' }}
            >
              <MenuItem onClick={handleMenuItemClick} className='customButton'>Home</MenuItem>
              <MenuItem onClick={handleMenuItemClick} className='customButton'>About</MenuItem>
              <MenuItem onClick={handleMenuItemClick} className='customButton'>Work</MenuItem>
              <MenuItem onClick={handleMenuItemClick} className='customButton'>Contact</MenuItem>
            </Menu>
          </>
        ) : (
            <div className='customButtons'>
            <Button color="inherit" className='customButton'>Home</Button>
            <Button color='inherit' className='customButton'>About</Button>
            <Button color='inherit' className='customButton'>Work</Button>
            <Button color='inherit' className='customButton'>Contact</Button>
            </div>
        )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
