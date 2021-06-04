import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import MossensLogo from '../../assets/logo.png';
import useStyles from './style';
import menuItems from './menu-items';

const Header = (props: any) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL: string) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL: string) => {
    history.push(pageURL);
  };

  return (
    <Grid className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => handleButtonClick('/')}
            style={{ cursor: 'pointer' }}
          >
            <img
              style={{ width: '8em', display: 'flex' }}
              src={MossensLogo}
              alt="logo"
            />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon style={{ fontSize: '2em' }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <Grid className={classes.headerOptions}>
              <Button
                className={classes.navColor}
                onClick={() => handleButtonClick('/')}
              >
                HEM
              </Button>
              <Button
                className={classes.navColor}
                onClick={() => handleButtonClick('/menu')}
              >
                MENY
              </Button>
            </Grid>
          )}
          <Button
            variant="contained"
            onClick={() => handleButtonClick('/login')}
            style={{ backgroundColor: '#c1a35f', fontWeight: 'bolder' }}
            startIcon={<PersonIcon />}
          >
            Logga in
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default withRouter(Header);
