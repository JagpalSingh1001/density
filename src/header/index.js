import * as React from 'react';
import logo from '../images/logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" className="header-main">
            <Container >
                <Toolbar disableGutters>
                    <Box className="header-logo">
                        <img src={logo} alt="logo" />
                    </Box>
                    <Box className='menu-icon' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            onClose={handleCloseNavMenu}>
                            <MenuItem className='menu-item active'>
                                <Link href="#" textAlign="center">Market</Link>
                            </MenuItem>
                            <MenuItem className='menu-item'>
                                <Link href="#" textAlign="center">Blogs</Link>
                            </MenuItem>
                            <MenuItem className='menu-item'>
                                <Link href="#" textAlign="center">Contact Us</Link>
                            </MenuItem>
                            <MenuItem className='menu-item'>
                                <Link href="#" textAlign="center">Log In</Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                className="header-link active"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Market</Button>
                            <Button
                                className="header-link"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Blogs</Button>
                            <Button
                                className="header-link"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Contact Us</Button>
                    </Box>

                    <Box className='header-right' sx={{ flexGrow: 0, display: "flex", alignItems: 'center' }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block', whiteSpace: "nowrap" }}
                            className="header-link"
                        >
                            Log In
                        </Button>
                        <button className='header-btn'>START TRADING</button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
