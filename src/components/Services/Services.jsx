

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
            </div>
        </section>
    )
}

export default Services

