import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import './Contact.css';


const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="about-cont">
                <div className="pt-20px border-end border-danger">
                    <img style={{ width: "700px" }} src="https://cdni.iconscout.com/illustration/premium/thumb/social-media-2706072-2260980.png" alt="" />

                </div>
                <div className="about border-end border-info">
                    <h4>If  You  Have  Any  query , </h4>
                    <h3> Please Contact With us</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                        <input type="text" {...register("price")} placeholder="Your Email" />
                        <textarea {...register("description")} placeholder="Your Query" />
                        <Button className="btn btn-success"> Submit</Button>
                    </form><br /><br />
                </div>
                <div className="about border-end border-info">
                    <h4>If  You  Have  Any  query , </h4>
                    <h3> Please Contact With us</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                        <input type="text" {...register("price")} placeholder="Your Email" />
                        <textarea {...register("description")} placeholder="Your Query" />
                        <Button className="btn btn-success"> Submit</Button>
                    </form><br /><br />
                    <h2>Contact with us </h2>
                    <h5>Our Email:<a href="#">pedalpals@gmail.com</a></h5>
                    <h5>Contact Number: +986524735</h5>

                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/2c/66/df/2c66df9f2ba31a2805d699b44655202e.jpg" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;