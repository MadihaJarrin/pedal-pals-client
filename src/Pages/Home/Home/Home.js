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
            <Reviews></Reviews>
            <Special></Special>
            <Footer></Footer>

        </div>
    );
};

export default Home;