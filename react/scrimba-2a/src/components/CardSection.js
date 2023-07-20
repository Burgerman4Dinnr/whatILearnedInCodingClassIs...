import React from 'react'

import Card from './Card'

const CardSection =()=> {
    return(
        <section className='section card-section'>
            <div className='container'>
                <div className='col-md-4'>
                    <Card />
                </div>
                <div className='col-md-4'>
                    <Card />
                </div>
                <div className='col-md-4'>
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default CardSection