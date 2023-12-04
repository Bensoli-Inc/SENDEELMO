import React from 'react';
import './Home.css';
import '@/components/Contact/Contact.css';
import {motion} from 'framer-motion'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'

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

const Home = () => {
    return (
            <section>
            <div className="paddings innerWidth hero-container ">
                 

                <div className="flexCenter hero-left " >
            
                    <div className="hero-title title1">
                        <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2, 
                            type: "spring"
                        }}
                        > 
                            SENTELMO <br />
                            Engineering 
                            <br /> Services
                        </motion.h1>
                    </div>  
                      
                </div>

                <div className='rait'>                   
                    {/*<div className="white-gradient light"/> */}
                    
                    <div className="flexCenter contactModes">

                        {/*first row*/}
                        

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
                                    Chat with us
                                </div>
                            </div>

                        </div>     
                    </div> 
                </div>
               
                
            </div>
            
            </section>           
    )
}

export default Home;

