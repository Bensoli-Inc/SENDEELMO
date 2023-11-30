import React from 'react';
import './Home.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'

const Home = () => {
    return (
            <section>
            <div className="paddings innerWidth hero-container ">
                 

                <div className="flexColStart hero-left " >
                <div className="white-gradient" />
                    <div className="hero-title title1">
                        <div className="orange-circle" />
                        <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2, 
                            type: "spring"
                        }}
                        >
                            SENDEELMO <br />
                            Electrical & <br /> Security Services 
                        </motion.h1>
                    </div>

                    <div className=" flexColStart">
                        <span className=' empower'>Illuminating spaces with innovation</span>
                        <span className='empower'>and seamless electrical solutions.</span>
                    </div>
                    
                
                    
                    <div className="flexCenter stats">
                        <div className=" flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Installations</span> 
                        </div>

                        <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Clients</span> 
                        </div>

                        <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winnings</span> 
                        </div>
                        
                    </div>
                    
                </div>

                <div className='rait'>
                    <div className="white-gradient light"/>
                </div>
               
                
            </div>
            
            </section>           
    )
}

export default Home;
