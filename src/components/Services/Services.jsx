/*

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

                <Swiper>
                    {
                        data.map((card, i)=> (
                            <SwiperSlide key={i}>
                                <div className="r-card">
                                    <img src="{card.image}" alt="home" />
                                    <span className="secondaryText r-price">
                                       <span>$</span><span>{card.price}</span>
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Services

*/