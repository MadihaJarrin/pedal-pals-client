
import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Navigation from '../../../Home/Navigation/Navigation';
import './AddReviews.css';
import { useHistory } from 'react-router';


const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();


    const onSubmit = data => {
        console.log(data);
        axios.post('https://vast-hollows-68559.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    // alert("added successfully");
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        history.replace('/');

    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="addService">
                <h1 id="add-h1">please add a Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="photo" /> <br />
                    <input {...register("name")} Placeholder="enter your name" /> <br />
                    <input {...register("rating")} Placeholder="enter your rating point" /> <br />
                    <textarea {...register("details")} placeholder="Your Review" /> <br />
                    <input className="btn btn-warning" type="submit" />

                </form>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddReviews;

