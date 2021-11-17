import React, { useEffect, useState } from 'react';
import Footer from '../../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import OProducts from '../../Products/OProducts';
import Products from '../../Products/Products';

const Explore = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `https://vast-hollows-68559.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <Navigation></Navigation>
            <div className="product-container">
                <h1 > popular Sports Bike</h1>
                <div id="msr">
                    {
                        services.map(service => <OProducts
                            key={service.id}
                            data={service}
                        ></OProducts>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;