import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './style/NavBar.css';

const NavBar = ({ sessionActive = false }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [sessionActiveState, setSessionActiveState] = React.useState(sessionActive);
  let settings = sessionActiveState ? ['Logout'] : ['Login'];
  let pages = sessionActiveState ? ['All Tasks', 'Add Task'] : [];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{

    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              EASY TASKS
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {sessionActiveState && <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="left">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>}
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            EASY TASKS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} to={`/${page}`} style={{ textDecoration: 'none', height: '100%' }}>
                <Typography
                  variant="h7"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: '#fff' }}
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>
          {sessionActiveState &&
            <MenuItem onClick={() => setSessionActiveState(!sessionActiveState)}>
              <Typography textAlign="left">{settings[0]}</Typography>
            </MenuItem>}
          {!sessionActiveState &&
            <Link to={`/login`} style={{ textDecoration: 'none', height: '100%' }}>
              <Typography sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: '#fff' }} textAlign="left">{settings[0]}</Typography>
            </Link>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;