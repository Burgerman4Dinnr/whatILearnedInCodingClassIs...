const express = require('express')
const router = express.Router()

const axios = require('axios')
const url = "https://api.sampleapis.com/beers/ale"
const brew = 'ale'
let count

router.get('/', (req, res)=> {
    axios.get(url).then(data => {
        // console.log(data.data)
        const beers = data.data
        // console.log(ales)
        count = beers.length
        res.render('pages/beers', {
            title: 'Ales',
            name: 'All of our Ales',
            beers,
            brew
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id


    axios.get(`${url}/${id}`).then(data => {
        const beer = data.data
        res.render('pages/beer-single', {
            title: `${beer.name}`,
            name: `${beer.name}`,
            beer,
            count,
            brew
        })
    })
})

module.exports = router