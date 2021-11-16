import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Special from '../Special/Special';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <div >
                <img src="https://st2.depositphotos.com/6887418/11540/v/450/depositphotos_115408458-stock-illustration-couple-bikers-riding-a-motorcycle.jpg" alt="" />
            </div>
            <Reviews></Reviews>
            <Special></Special>
            <Footer></Footer>

        </div>
    );
};

export default Home;