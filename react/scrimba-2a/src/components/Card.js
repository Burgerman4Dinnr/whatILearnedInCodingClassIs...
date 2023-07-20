import React from 'react'

import cardImg from '../images/katie-zaferes.png'
import star from '../images/star.png'

const Card =()=> {
    return(
        <figure className='figure card-fig'>
            <p className='available text-uppercase'>sold out</p>
            <img src={cardImg} alt='katie zaferes' className='img-fluid figure-img rounded' />
            <figcaption className='figure-caption'>
                <img src={star} alt='star' className='img-fluid fig-star' />
            </figcaption>
            <figcaption className='figure-caption'>Life lessons with Katie Zaferes</figcaption>
            <figcaption className='figure-caption'><span className='bold'>From $136</span>person</figcaption>
        </figure>
    )
}

export default Card