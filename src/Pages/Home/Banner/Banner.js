import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import bike1 from '../../../images/bike1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-dark banner">
            <div className="banner-1">
                <img src={bike1} alt="" />
            </div>
            <div className="banner-2  ">
                <h1><span>P</span>edal<span>P</span>als</h1><br />
                <h4>Beat your friend on the race , <br />  Buy the bike full of grace.</h4><br />
                <Link to="/explore"> <Button className="button btn btn-outline-secondery btn-lg">Explore</Button></Link>
            </div>
        </div >
    );
};

export default Banner;