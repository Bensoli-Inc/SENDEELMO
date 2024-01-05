import React from 'react';
import './Home.css';
import '@/components/Contact/Contact.css';
import {motion} from 'framer-motion'

import {BsFillChatDotsFill} from 'react-icons/bs'



const Home = () => {
    return (
            <section>
                <div className='main'>
                    <div className="flexCenter hero-left innerWidth hero-container " >
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
                                            Electrical 
                                            <br /> Services
                                    </motion.h1>
                                </div> 
                                <div>
                                    <p className='secondaryText'>
                                        Illuminatig the world with expert elecrical solutions.
                                    </p>
                                </div>
                                <div className="white-gradient light"/>
                    </div>
                   
                    <div className='cover'>
                        <img src="./john.jpg" alt="cover" />
                    </div>
                </div>
            </section>           
    )
}

export default Home;

                    
                    
                    
