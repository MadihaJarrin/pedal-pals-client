import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg';
import Footer from '../../Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';

const Login = () => {

    // const responseSuccessGoogle = (response) => {
    //     console.log(response);
    //     axios({
    //         mathod: "POST",
    //         url: "http://localhost:8000/api/googlelogin",
    //         data: { tokenId: response.tokenId }
    //     }).then(response => {
    //         console.log(response);
    //     })
    // }


    const responseErrorGoogle = (response) => {

    }
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        // alert("Your Login is SucessFull");
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (

        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}

                        </form>
                        <p>------------ Or ------------</p>

                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                        {/* <Button variant="contained">Sign In with node</Button> */}
                        <br></br>
                        {/* <div>
                            <GoogleLogin
                                clientId="893453291495-ao7q3rooplkonsmaqflgr6hukro7n8sm.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseErrorGoogle}
                                cookiePolicy={'single_host_origin'}
                            />,

                        </div> */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;