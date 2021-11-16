
import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddReviews.css';

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("added successfully");
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="addService">
            <h1 id="add-h1">please add a Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="photo" /> <br />
                <input {...register("name")} Placeholder="enter your name" /> <br />
                <textarea {...register("details")} placeholder="Your Review" /> <br />
                <input className="btn btn-warning" type="submit" />

            </form>

        </div>
    );
};

export default AddReviews;

