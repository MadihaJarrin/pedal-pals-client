import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';
import './Pay.css'

const Pay = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="payment-cont">
                <h1 className="m-5, p-5 "> Payment is coming soon.</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Pay;