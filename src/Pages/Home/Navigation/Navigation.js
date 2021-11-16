import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';


const Navigation = () => {

    const phone = <FontAwesomeIcon icon={faPhone} />
    const useri = <FontAwesomeIcon icon={faUser} />
    const mail = <FontAwesomeIcon icon={faMailBulk} />

    const { user, logout } = useAuth();
    return (
        <div className="header-container border-top border-bottom border border-success">
            {/* <div className="justify-content-lg-around align-items-center justify-content-sm-between  " id="external-nav">
                <div className="d-flex gap-5" id="contact-mail">
                    <a target="_blank" href="https://www.gmail.com">{mail} admin@mediacare.com</a>
                    <NavLink to="/contact">{phone} 08868-842-8877 </NavLink>
                </div>
                <div className="d-flex gap-3" id="contact-icon">
                    <a href="https://www.facebook.com"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://www.facebook.com"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://www.facebook.com"><i class="fab fa-instagram-square"></i></a>
                    <a href="https://www.facebook.com"><i class="fab fa-youtube-square"></i></a>
                </div>
            </div> */}
            <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
                <div className="container-fluid mx-lg-5 mx-md-2">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand " id="navbar-brand" to="/">PedalPals</NavLink>
                    <div className="offcanvas offcanvas-start text-center " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-body" id="offcanavas">
                            <ul className="navbar-nav ps-lg-5 me-auto mb-2 mb-lg-0 gap-4" id="collapse-text" >

                                <li className="nav-item">
                                    <NavLink className="nav-link active header" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active header" to="/contact">Contact</NavLink>
                                </li>
                                {
                                    user.displayName && <NavLink className="nav-link active header" to="/dashboard">DashBoard</NavLink>
                                }
                            </ul>

                            <br />

                            <div id="icon">
                                <div className="drop">
                                    <ul>

                                        <li id="icon-user" >
                                            {user?.displayName ?
                                                <img id="user-img" src={user.displayName} alt="" /> :
                                                <NavLink to="/login">{useri}</NavLink>}
                                        </li>
                                        <li>
                                            <ul className="user-div">

                                                {
                                                    user?.email ?
                                                        <Box>
                                                            {/* <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                                                <Button color="inherit">Dashboard</Button>
                                                            </NavLink><br /> */}
                                                            <Button onClick={logout} color="inherit">Logout</Button>
                                                        </Box>
                                                        :
                                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                                            <Button color="inherit">Login</Button>
                                                        </NavLink>
                                                }
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                                <div >
                                    <NavLink id="cart" to="/contact" data-bs-toggle="tooltip" data-bs-placement="left" title="Contact" data-bs-html="true" >{phone}</NavLink>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navigation;