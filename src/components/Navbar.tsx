import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
// import { useCurrentUser, useSetCurrentUser } from '../context/CurrentUserContext';
import ModalLocation from './organisms/ModalLocation';
import IconSHSLogo from '../assets/svgs/IconSHSLogo';
import nav from '../styles/Navbar.module.css';
import BtnBookNow from './atoms/BtnBookNow';
import MenuIcon from '../assets/svgs/MenuIcon';
import LanguageSelect from './organisms/LanguageSelect';

const pages = [
  { text: 'navbar.about', link: '' },
  { text: 'navbar.locations', link: 'locations' },
  { text: 'navbar.services', link: 'services' },
  { text: 'navbar.practitioners', link: 'practitioners' },
  { text: 'navbar.contact', link: 'contact' },
];
// const settings = [{ text: 'navbar.logOut', link: 'logout' }];

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // const currentUser = useCurrentUser();
  // const setCurrentUser = useSetCurrentUser();

  const [locationOpen, setLocationOpen] = useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handlePageNavigation = (page: string) => {
    navigate(`/${page}`);
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // const handleLogout = async () => {
  //   try {
  //     await axios.post('dj-rest-auth/logout/');
  //     setCurrentUser(null);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <AppBar
      position="static"
      style={{
        padding: 'var(--spacing-1)',
        backgroundColor: 'var(--mui-palette-primary-pink)',
      }}
    >
      <Toolbar disableGutters style={{ justifyContent: 'space-between' }}>
        <a className={nav.logo} href={'/'}>
          <IconSHSLogo
            width={'50px'}
            height={'50px'}
            color={'var(--mui-palette-primary-white'}
          />

          <div className={nav.shs}>
            <h2>System Health Spine</h2>
            <p className={nav.subtext}>+30 211.1829292 | info@systemhealthspine.com</p>
          </div>
        </a>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            color="inherit"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            aria-controls={'menu-appbar'}
            aria-label="account of current user"
          >
            <MenuIcon stroke={'var(--mui-palette-primary-white)'} />
          </IconButton>
          <Menu
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
            onClose={() => setAnchorElNav(null)}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map(page => (
              <MenuItem key={page.text} onClick={() => handlePageNavigation(page.link)}>
                <a style={{ textTransform: 'capitalize' }}>{t(page.text)}</a>
              </MenuItem>
            ))}
            <MenuItem>
              <LanguageSelect />
            </MenuItem>
            <MenuItem>
              <BtnBookNow />
            </MenuItem>
          </Menu>
        </Box>

        {/* -----WEB VIEW----- */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {pages.map(page => (
            <Button
              key={page.text}
              onClick={() => handlePageNavigation(page.link)}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
              }}
            >
              {t(page.text)}
            </Button>
          ))}
          <BtnBookNow />
          <LanguageSelect />
        </Box>

        {/* {currentUser && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <IconGear color={'#F1F1F1'} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((it, ind) => (
                <MenuItem
                  key={it.link + ind}
                  onClick={() =>
                    it.link === 'logout' ? handleLogout() : handlePageNavigation(it.link)
                  }
                >
                  <Typography textAlign="center">{t(it.text)}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  setLocationOpen(true);
                  setAnchorElNav(null);
                }}
              >
                <Typography textAlign="center">{t('navbar.addLoc')}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )} */}
      </Toolbar>
      <ModalLocation open={locationOpen} setOpen={setLocationOpen} />
    </AppBar>
  );
}
export default Navbar;
