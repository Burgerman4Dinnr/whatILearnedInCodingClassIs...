import React from "react"

import heroimg from '../images/photo-grid.png'

const Hero=()=> {
    return(
        <div className="hero main">
            <img src={heroimg} alt="hero image" className="img-fluid hero-img"></img>
            <h1 className="header-text">Online Experience</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-king hosts-all without leaving home.</p>
        </div>
    )
}

export default Hero