import React, { useEffect, useState } from 'react';
import AllReviews from './AllReviews';
import './Reviews.css';

const Reviews = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/reviews`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className="review-container">
            <div className="review-h">
                <h1>Client Reviews</h1>
            </div>

            <div id="msr">
                {
                    services.map(service => <AllReviews
                        key={service.id}
                        data={service}
                    ></AllReviews>)
                }
            </div>

        </div>
    );
};

export default Reviews;