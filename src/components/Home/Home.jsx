import React from 'react';
import './Home.css';
import '@/components/Contact/Contact.css';
import {motion} from 'framer-motion'

import {BsFillChatDotsFill} from 'react-icons/bs'



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
                        

                           

                        </div>     
                    </div> 
                </div>
               
                
            </div>
            
            </section>           
    )
}

export default Home;

