import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://vast-hollows-68559.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("added successfully");
                    reset();
                }
            })
            .catch(function (error) {
                // console.log(error);
            });

    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="addService">
                <h1 id="add-h1">please add a services</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="photo" /> <br />
                    <input {...register("name")} Placeholder="enter products name" /> <br />
                    <input type="number" {...register("price")} placeholder="price" /> <br />
                    <input {...register("color")} placeholder="color" /> <br />
                    <textarea {...register("details")} placeholder="Description" /> <br />

                    {/* <Link to='/'> */}
                    <input className="btn btn-success" type="submit" />
                    {/* </Link> */}

                </form>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddServices;