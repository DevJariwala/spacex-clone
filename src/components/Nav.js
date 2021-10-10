import React from 'react'
import './Nav.css'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Nav() {

    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <div className="Nav">
            <div className="nav__img">
                <a href="/"><img src="https://download.logo.wine/logo/SpaceX/SpaceX-Logo.wine.png" alt="this is imag" /> </a>
                
                {/* <img src="https://www.vhv.rs/dpng/d/453-4533340_spacex-logo-png-white-spacex-black-logo-png.png" alt="" /> */}
            </div>
            <div className="nav__info">
                <p><a href="/">falcon9</a></p>
                <p><a href="/">falcon-heavy</a></p>
                <p><a href="/">dragon</a></p>
                <p><a href="/">starship</a></p>
                <p><a href="/">human-spacefligh</a></p>
                <p><a href="/">rideshare</a></p>
            </div>
            <div className="nav__rightMenu">
                <p><a href="/">shop</a></p>
                <MenuIcon onClick={()=>setBurgerStatus(true)} className="menu__icon" />
            </div>

            <div className="outside__menu">
                <MenuIcon onClick={()=>setBurgerStatus(true)} className="menu__icon" />
            </div>

            <div className={`burger__nav ${burgerStatus?"display":""}`}>
                <div className="closeIcon">
                    <CloseIcon onClick={()=>setBurgerStatus(false)} className="close"/>
                </div>
                <li><a href="/">Mission</a></li>
                <li><a href="/">Launches</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Updates</a></li>
                <li><a href="/">Shop</a></li>
            </div>
            
        </div>
    )
}

export default Nav
