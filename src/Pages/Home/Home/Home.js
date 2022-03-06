import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import BannerDown from '../Banner/BannerDown';
import BikeHistory from '../BikeHistory/BikeHistory';
import Navigation from '../Navigation/Navigation';
import PowerUnit from '../PowerUnit/PowerUnit';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Special from '../Special/Special';

const Home = () => {
    return (
        <div >
            {/* style={{ backgroundColor: '#F3EFEF' }} */}
            <Navigation></Navigation>
            <div style={{ backgroundColor: '#F3EFEF' }}>
                <Banner></Banner>
                <BannerDown></BannerDown>
                <Products></Products>
            </div>
            <div  >
                <img src="https://st2.depositphotos.com/6887418/11540/v/450/depositphotos_115408458-stock-illustration-couple-bikers-riding-a-motorcycle.jpg" alt="" />
            </div>
            <PowerUnit></PowerUnit>
            <BikeHistory></BikeHistory>
            <Reviews></Reviews>
            <Special></Special>
            <Footer></Footer>

        </div>
    );
};

export default Home;