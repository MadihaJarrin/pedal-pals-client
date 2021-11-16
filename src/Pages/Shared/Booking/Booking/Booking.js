import { Link, Alert } from '@mui/material';
import Button from '@restart/ui/esm/Button';
// import { Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import Navigation from '../../../Home/Navigation/Navigation';
import './Booking.css';

const Booking = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    // const [bookingSuccess, setBookingSuccess] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    })
    const [offers, setOffer] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/products";
        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data));
    }
        , [])

    //for user 
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handleContact = e => {
        setContact(e.target.value)
    }
    //For confirm button

    const handleAddUser = () => {
        const name = user.displayName;
        const email = user.email;

        const data = ({
            name: name,
            email: email,
            address: address,
            contact: contact,
            serviceImg: product.img,
            serviceName: product.name,
            servicePrice: product.price,
            // serviceLocation: service.address,
            serviceDetails: product.details,
            status: "Pending",
        });
        console.log(data);
        fetch("http://localhost:5000/addOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),

        })
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    // setBookingSuccess(true);
                    alert("added successfully");

                }
            })
    };

    return (
        <div>
            <Navigation></Navigation>
            <div className="booking-container">

                <div className="mt-5  d-flex justify-content-center ">
                    <div className="booking-confirm">
                        <div className="add-services">
                            <form>
                                <h5>Your Name</h5>
                                <input value={user.displayName} />
                                <h5>Your Email</h5>
                                <input value={user.email} />
                                <h5>Your Location</h5>
                                <input onChange={handleAddress} placeholder="Adress" />
                                <h5>Contact Number</h5>
                                <input onChange={handleContact} placeholder="Phone Number" />
                                <h5>Booking Name </h5>
                                <input value={product.name} type="text" placeholder=" Booking Name" /><br />
                                {/* <h5>Booking Price</h5>
                <input value={product.price} type="number" placeholder=" Booking Price" /> */}
                                <Link to={`/dashboard`}>
                                    <Button onClick={handleAddUser} variant="primary" className="btn btn-success"><b>Purchase Confirm</b></Button>
                                </Link>

                                {/* {bookingSuccess && <Alert severity="success">Login successfully!</Alert>} */}
                            </form>
                        </div>

                    </div>
                </div>
                <div className="booking-details">
                    <img src={product.img} alt="" />
                    <h6>This is booking : {productId}</h6>
                    <h2> {product.name}</h2>
                    <h5> Color: {product.color}</h5>
                    <p> {product.details}</p>
                    <h2>Price : {product.price}</h2>
                </div>

            </div>
        </div>
    );
};

export default Booking;