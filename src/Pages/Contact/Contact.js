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

        axios.post('https://vast-hollows-68559.herokuapp.com/products', data)
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
                    <h3> Please Contact With us</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                        <input type="text" {...register("price")} placeholder="Your Email" />
                        <textarea {...register("description")} placeholder="Your Query" />
                        <Button className="btn btn-success"> Submit</Button>
                    </form><br /><br />
                </div>



                <div className="about border-end border-info">
                    {/* <h4>If  You  Have  Any  query , </h4>
                    <h3> Please Contact With us</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                        <input type="text" {...register("price")} placeholder="Your Email" />
                        <textarea {...register("description")} placeholder="Your Query" />
                        <Button className="btn btn-success"> Submit</Button>
                    </form><br /><br /> */}
                    <h2>Contact with us </h2>
                    <h5>Our Email:<a href="https://github.com/">pedalpals@gmail.com</a></h5>
                    <h5>Contact Number: +986524735</h5>

                </div>
                <div id="about-last">
                    <img src="https://www.pinclipart.com/picdir/big/337-3379122_technical-support-and-website-maintenance-contact-us-vector.png" alt="" />
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;