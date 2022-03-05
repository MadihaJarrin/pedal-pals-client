import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import PowerUnitImg from '../../../images/PowerImage.jpeg'
import './PowerUnit.css'
import { margin } from '@mui/system';

const PowerUnit = () => {

    return (
        <div className="bg-black powerCont">
            <div className="powerCont-2  ">
                <h1><span>WHERE</span> TO <span>WORK</span></h1><br />
                <h4>Power & Style Unit</h4>
                <h4>Beat your friend on the race , <br />  Buy the bike full of grace.</h4><br />
                <Link to="/explore"> <Button style={{ color: 'white', padding: "10px", margin: "0px 10px" }} className=" btn btn-outline-danger">DISCOVER NOW</Button></Link>
                <Link to="/login"> <Button style={{ color: 'white', padding: "10px" }} className=" btn btn-outline-danger"> SHOP NOW</Button></Link>
            </div>
            <div className="banner-1">
                <img src={PowerUnitImg} alt="" />
            </div>
        </div >
    );
};

export default PowerUnit;