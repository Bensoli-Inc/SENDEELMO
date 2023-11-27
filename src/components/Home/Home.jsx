import React from 'react';
import './Home.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'

const Home = () => {
    return (
        
            <div className="paddings innerWidth hero-container ">
                 
{/*left side */}
                <div className="flexColStart hero-left " >
                    <div className="hero-title">
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
                        <span className='secondaryText'>Contact us for new Electrical & Solar panel installations, all fault diagnosis, maintenance & electrical repairs</span>
                        <span className='secondaryText'>We also set up Electric fences & CCTV cameras and their maintenance</span>
                    </div>
                    
                
{/* STATS */}
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


{/*right side */}
                <div className="flexCenter hero-right">
                    <motion.div 
                    initial={{x: "7rem", opacity: 0}}
                    animate={{x: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    
                    className="image-container ">
                        <img src="./home.jpeg" alt="" />
                    </motion.div>
                </div>
            </div>
        
    )
}

export default Home;