import React from "react";
import './Booking.css'


const Booking = () => {
    return (
        <section className="g-wrapper flexCenter">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get started with our Engineers</span>
                    <span className="secondaryText">
                      Contract skilled professionals & technicians through our seamless booking service.
                     <br />
                     Our expert team is ready to bring their skills to your workshop or any location in need of electrical services.
                    </span>
                    <button className="button">
                        <a href="mailto:benswambua96@gmail.com">Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Booking