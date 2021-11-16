import React, { useEffect, useState } from 'react';
import OProducts from './OProducts';
import './Products.css';

const Products = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className="product-container">
            <h1 > popular Sports Bike</h1>
            <div id="msr">
                {
                    services.slice(0, 6).map(service => <OProducts
                        key={service.id}
                        data={service}
                    ></OProducts>)
                }
            </div>
        </div>
    );
};

export default Products;