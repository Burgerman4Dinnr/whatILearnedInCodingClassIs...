import { useState } from 'react'
import memesData from '../memesData'

const Meme =()=> {

    const [meme, setMemeImage] =useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
        alt: ''
    }

    )
    
    
    const getMemeImage =()=> {
        const memesArray = allMemeImages.data.memes
        let idx = Math.floor(Math.random() * memesArray.length)
        // console.log(memes[idx].url
        setMeme({
            ...meme,
            randomImage: memesArray[idx].url,
            alt: memesArray[idx].name
        })
    }

    return(
        <section className="section meme-section">
        <div className="meme-form">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text" className="input-1 form-control" />
                    </div>
                    <div className="col">
                        <input type="text" className="input-1 form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="d-grid">
                        <button onClick={getMemeImage} className="btn meme-btn" type="button">Get a meme image</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='meme-div'>
            <img src={meme.randomImage alt={alt} className='img-fluid meme-image' />
        </div>
        </section>
    )
}

export default Meme