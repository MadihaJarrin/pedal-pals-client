import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt">
            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h2>About us</h2>
                        <div className="content">
                            <p>It’s the most SPOOK-TACULAR time of the year! Grab your favorite little monsters and our OCTOBER HOLIDAY HYPE box to make the most of this awesome holiday! This month’s box includes items to set the stage for a spooky BOO BREAKFAST including BOO-tiful napkins, party cups to fill with treats, matching GHOUL GANG blow outs, and all the props you’ll need for a fun and festive vampire drink (fangs included)! <NavLink to="/about">More</NavLink> </p>
                            <div className="social">
                                <a href="https://facebook.com"><span className="fab fa-facebook-f"></span></a>
                                <a href="ss"><span className="fab fa-twitter"></span></a>
                                <a href="https://instagram.com"><span className="fab fa-instagram"></span></a>
                                <a href="https://youtube.com"><span className="fab fa-youtube"></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="center box">
                        <h2>PesalPals</h2>
                        <div className="content">
                            {/* <div className="place">
                                <span className="fas fa-map-marker-alt"></span>
                                <span className="text">Mirpur 12 , Dhaka</span>
                            </div> */}
                            {/* <div className="phone">
                                <span className="fas fa-phone-alt"></span>
                                <span className="text">008-01875669144</span>
                            </div> */}
                            {/* <div className="email">
                                <span className="fas fa-envelope"></span>
                                <span className="text">madihajarrin@gmail.com</span>
                            </div> */}
                        </div>
                    </div>

                    <div className="right box">
                        <h2>Contact us</h2>
                        <div className="content">
                            <form action="#">
                                <div className="email">
                                    <div className="text">Email *</div>
                                    <input type="email" required />
                                </div>
                                <div className="msg">
                                    <div className="text">Message *</div>
                                    <textarea rows="2" cols="25" required></textarea>
                                </div>
                                <div className="btn">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <center>
                        <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
                    </center>
                </div>
            </footer>
        </div>
    );
};

export default Footer;