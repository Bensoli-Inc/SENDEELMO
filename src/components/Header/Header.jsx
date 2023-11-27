import React, {useState} from 'react';
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && "-100%"}
        }
    }
    return (
         <section className="h-wrapper">
            <div className="flexCenter innerWidth paddings h-container">
                <img src="./logo.png" alt="logo"  width={100}/>
                
            <OutsideClickHandler
            onOutsideClick={() => {
                setMenuOpened(false);
            }}
            >
                <div className="flexCenter h-menu"
                style={getMenuStyles(menuOpened)}
                >
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Services</a>
                    <a href="">Contact Us</a>
                    <a href="">Our Work</a>
                    <a href="">Blog</a>
                    <button className='button'>
                        <a href="">Contact</a>
                    </button>
                </div>
            </OutsideClickHandler>

                <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                  <BiMenuAltRight size={30} />
                </div>

            </div>
            
         </section> 
  )
}

export default Header 