import React, { useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Grid, Button, } from '@mui/material';
import {
    Menu as MenuIcon, Search as SearchIcon, AccountCircle, Notifications as NotificationsIcon, MoreVert as MoreIcon,
} from '@mui/icons-material';
import { routepath } from '../../../Router/RouteList';
import { Routes, Route, useParams } from "react-router-dom";
import PrivateRoute from '../../../Router/ProtectRoutes';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { clearStorage } from '../../../Config/Service/Service';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { data } from "../../../Config/data";
import { useSelector } from 'react-redux';
import logo from './logo.png'
import Home from '../Home/Home';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}
const drawerWidth = 240;

export default function LandingPage(props: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [sideBarData, setSideBarData] = React.useState([]);
    const param = useParams();
    const url = param["*"];
    const cartItems: any = useSelector((state: any) => state?.cart);

    let newUrl: any;
    useEffect(() => {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (key === url) {
                    setSideBarData(data[key])
                    break;
                }
            }
        }

        return () => {

        }
    }, [url])
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={() => clearStorage()}>Log Out</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to="cart">
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={cartItems?.cart?.length} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>
                <p>Cart</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12} className="layoutContainer">
                    <AppBar position="fixed" >
                        <Toolbar sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                {/* <img src={logo} style={{ height: '30px'}}/> */}
                                <p style={{
                                    fontFamily: "monospace",
                                    fontSize: "18px",
                                    margin: 0,
                                    fontWeight: 'bolder'

                                }}>Elipskart</p>
                                <p style={{
                                    fontFamily: "monospace",
                                    fontSize: "10px",
                                    margin: 0,
                                    fontWeight: 'bolder'
                                }}>Explore <span style={{ color: 'yellow', fontWeight: 'bolder' }}>More</span></p>
                            </Typography>
                            <Search sx={{ width: '40%' }}>
                                <SearchIconWrapper sx={{ color: '#1976d2' }} >
                                    <SearchIcon sx={{ color: '#1976d2' }} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ color: '#000', background: '#fff', width: '35ch' }}
                                />
                            </Search>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        color: '#000',
                                        background: '#fff',
                                        width: '13ch',
                                        // border: '1px solid #000',
                                        transition: 'border-color 0.3s, background-color 0.3s',
                                        '&:hover': {
                                            borderColor: '#555',
                                            backgroundColor: '#eee',
                                        },
                                    }}
                                >
                                    Login
                                </Button>

                            </Link>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Link to="cart" style={{ color: "#fff" }}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={cartItems?.cart?.length} color="error">
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </Link>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >

                        </Drawer>
                    </Box>
                    {/* {renderMobileMenu} */}
                    {/* {renderMenu} */}
                </Grid>
            </Grid>
            <Grid xs={12} md={12}>
                <Box sx={{ flexGrow: 1, marginTop: '116px' }}>
                    <Home />
                    {/* <Routes>
            {routepath.map((i: any, index: any) => {
              if (i.private) {
                return (
                  <Route
                    key={`routes_${index}`}
                    path={i.path}
                    element={<PrivateRoute Component={i.Element} />}

                  />
                );
              } else {
                return (
                  <Route key={`routes_${index}`} path="*" element={<h6>notfound</h6>} />
                );
              }
            })}
          </Routes> */}
                </Box>
            </Grid>
        </Box >
    );
}