import React from 'react';
import './Special.css';

const Special = () => {
    return (
        <div className="sp-cnt">
            {/* <h2>Special</h2> */}
            <div>
                <img src="https://image.freepik.com/free-vector/customer-giving-quality-feedback_74855-5482.jpg" alt="" />
            </div>


            <div className="special-container">
                <div className="contain-sp">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
                        <div className="col" id="card">
                            <i className="fas fa-broom"></i>
                            <p className="fw-bolder"> 24 hour servicing Opportunity</p>
                        </div>
                        <div className="col" id="card">
                            <i class="fas fa-capsules"></i>
                            <p className="fw-bolder">10% Bonus For Regular client</p>
                        </div>
                        <div className="col" id="card">
                            <i class="fas fa-car"></i>
                            <p className="fw-bolder">Convenient lifestyle</p>
                        </div>
                        <div className="col" id="card">
                            <i class="fas fa-mug-hot"></i>
                            <p className="fw-bolder"> 24/7 Cafeteria Services</p>
                        </div>
                        <div className="col" id="card">
                            <i class="fas fa-video"></i>
                            <p className="fw-bolder"> Bonus Tour for special time</p>
                        </div>
                        <div className="col" id="card">
                            <i class="fas fa-wifi"></i>
                            <p className="fw-bolder">High Quality Product</p>
                        </div>
                        <div className="col" id="card">
                            <i class="fas fa-pray"></i>
                            <p className="fw-bolder">3 times Big sell</p>
                        </div>
                        <div className="col" id="card">
                            <i class="fas fa-chair"></i>
                            <p className="fw-bolder">More</p>
                        </div>


                    </div>
                </div>
            </div>

        </div>

    );
};

export default Special;