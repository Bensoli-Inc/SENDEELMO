import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings  innerWidth flexCenter f-container">
                
                {/*left side*/}
                <div className="flexColStart f-left">
                    <img src="SET.jpg" alt="" width={180} />

                    <span className="secondaryText">
                    Illuminating spaces with innovation and safety, <br />
                    we connect the world through expert electrical solutions.
                    </span>
                </div>


                <div className="f-rightflexColStart">
                    <span className="primaryText">Information</span> <br />
                    <span className="secondaryText">90100 Kitengela, Nairobi Kenya </span>
                
                    <div className="flexCenter f-menu">
                        <span>Home</span>
                        <span>Services</span>
                        <span>Contact Us</span>
                        <span>Bookings</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer 
