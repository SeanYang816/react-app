import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@material-ui/core/styles';
import { Menu, MenuItem, Button, Avatar, Box } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'



const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
const MenuButton = (props) => <IconButton color="inherit" aria-label="Menu" {...props}><MenuIcon fontSize="large" /></IconButton>

function Header() {

  const [anchorEl, setAnchorEl] = useState(false);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawerWidth = 240;

  return (
    <>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MenuButton />
          </Box> */}
          <Box>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ color: 'black' }}
            >
              <Avatar>
                <AccountCircleIcon sx={{ width: '50px', height: '50px' }} />
              </Avatar>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link to="/profile"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
              <Link to="/account"><MenuItem onClick={handleClose}>My account</MenuItem></Link>
              <Link to="/logout"><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
            </Menu>
          </Box>
        </Toolbar>
        <Sidebar
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left" />
      </AppBar>
      
      <Offset />
    </>
  )
}

export default Header
