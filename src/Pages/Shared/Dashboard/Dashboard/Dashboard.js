import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Footer from '../../../Footer/Footer';
import useAuth from '../../../../Hooks/useAuth';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { user, logout, admin } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <div className="dashboard">
                <Link style={{ textDecoration: "none" }} to="/pay"><Button color="inherit"> Pay </Button></Link><br />
                <Link style={{ textDecoration: "none" }} to="/myorder"><Button color="inherit"> My Order </Button></Link><br />
                <Link style={{ textDecoration: "none" }} to="/addreviews"><Button color="inherit">Reviews</Button></Link><br />
                <Link style={{ textDecoration: "none" }} to="/"><Button onClick={logout} color="inherit">Log Out</Button></Link>

                {admin && <Box>
                    <Link to={`${url}/allorder`} style={{ textDecoration: "none" }} to="/allorder"><Button color="inherit">Manage All Orders</Button></Link>
                    <Link to={`${url}/addproducts`} style={{ textDecoration: "none" }} to="/addproducts"><Button color="inherit">Add Products</Button></Link>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }} to="/makeadmin"><Button color="inherit">Make Admin</Button></Link>
                    <Link to={`${url}/manageproducts`} style={{ textDecoration: "none" }} to="/manageproducts"><Button color="inherit">Manage Products </Button></Link>
                </Box>

                }

            </div>
            {/* <List>

                {
                    ['Pay', 'My Order', 'Reviews', 'Log Out'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                    }
            </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>

            <Box className="dash-cont" sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
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
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 2, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />

                    {/* <Switch>
                        <Route exact path={path}>
                            <Pay></Pay>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>

                    </Switch> */}

                    <Typography paragraph>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>

                                <h1 class="dash-h"> Kindly, Click your desire destination</h1>
                            </Grid>
                        </Grid>
                    </Typography>
                </Box>
            </Box>

        </div>

    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;