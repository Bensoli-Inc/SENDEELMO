

import React from "react";
import './Services.css';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import'swiper/css';
import data from '../../utils/slider.json';

const Services = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Our Services</span>
                    <span className="primaryText">Popular Services</span>
                </div>
                <div className="flexColCenter paddings innerWidth">

                    <div className="serv">
                        <p className="primaryyText">
                            New Wiring Installation
                        </p>
                    </div>

                    <div className="serv">
                        <p className="primaryyText">
                            CCTV Installation
                        </p>
                    </div>

                    <div className="serv">
                        <p className="primaryyText">
                            Solar Installation
                        </p>
                    </div>

                    <div className="serv">
                        <p className="primaryyText">
                            Electric Fence installation
                        </p>
                    </div>

                    <div className="serv">
                        <p className="primaryyText">
                            Fault Diagnosis & Maintenance
                        </p>
                    </div>

                </div>
                
            </div>
        </section>
    )
}

export default Services

