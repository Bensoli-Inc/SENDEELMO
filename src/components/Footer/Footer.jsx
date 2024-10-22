import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings  innerWidth flexCenter f-container">
                
                {/*left side*/}
                <div className="flexColCenter f-left">
                    <img src="SET.jpg" alt="" width={180} />
                </div>


                <div className="f-rightflexColStart">
                    <span className="secondaryText"> &#169; 2024 All rights Reserved <br /> Sentelmo Electrical Services </span> <br />
                    
                    <span className="secondaryText">90100 Kitengela, <br /> Nairobi Kenya </span>
                
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
