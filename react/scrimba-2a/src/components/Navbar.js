import React from "react"

import logo from '../images/airbnb-logo.png'

const Navbar=()=> {
    return(
        <nav className="nav top-nav">
            <div className="container">
                <img src={logo} alt='airbnb logo' className='img-fluid logo-img' />
            </div>
        </nav>
    )
}

export default Navbar