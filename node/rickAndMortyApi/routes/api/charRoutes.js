const express = require('express')
const router = express.Router()

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
let count


//all character routes
fetch('https://api.sampleapis.com/rickandmorty/characters')
    .then(res => res.json())
    .then(data => count = data.length)

    router.get('/', (req, res) => {
        const url = "https://api.sampleapis.com/rickandmorty/characters"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/characters', {
                title: 'Rick & Morty - characters',
                name: 'characters from the tv series, rick & morty',
                data
            })
        })
    })
        //single character route
        router.get('/:id', (req, res) => {
            const id = req.params.id
            const url = `https://api.sampleapis.com/rickandmorty/characters/${id}`

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    res.render('pages/char_single',
                    {
                        title: `${data.name}`,
                        species: `${data.species}`,
                        alive: `${data.species}`,
                        img: `${data.image}`,
                        origin: `${data.origin}`,
                        data,
                        count
                    })
                })
        })


        module.exports = router