import React from "react";
import './Contact.css';
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2' 


function openWhatsApp () {
    const phoneNumber = "+254790998545"
    const whatsappLink = "https://wa.me/+254790998545"
    window.open(whatsappLink)
}


function callMe () {
        const phoneNumber = "+254790998545"
        const telLink = "tel:" +254790998545;
        window.location.href = telLink;
    }


const Contact = () => {
    
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/*left-side*/}
                <div className="c-left flexColStart">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to Contact Us</span>
                    <span className="secondaryText">Our vision is to empower homes and businesses with seamless electrical solutions that prioritize safety, efficiency, and innovation.</span>
               
               
                    <div className="flexColStart contactModes">

                        {/*first row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">0790998545</span>
                                    </div>
                                </div>
                                <div className="flexCenter button" onClick={callMe}>
                                    Call Now
                                </div>
                            </div>

                            {/*second mode*/}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Whatsapp</span>
                                        <span className="secondaryText">0790998545</span>
                                    </div>
                                </div>
                                <div className="flexCenter button" onClick={openWhatsApp}>
                                    Chat Now
                                </div>
                            </div>

                        </div>     
                    </div> 
                </div>


                {/*right-side*/}
                <div className="c-right flexColCenter"> 
                    <div className="CEO">
                        <p className="primaryText"> 
                            EGH. JONATHAN <br />
                            CEO SENTELMO 
                        </p>
                    </div>
                    <div className="image-container">
                        <img src="./contactimage.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
