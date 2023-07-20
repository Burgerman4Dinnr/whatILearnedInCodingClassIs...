const express = require('express')
const router = express.Router()

router.use(express.static('public'))

const jokeRoutes = require('./api/jokeRoutes')

router.use('/jokes', jokeRoutes)

//home route
router.get('/',(req, res) => {
    res.render('pages/home', {
        title: 'My Jokes website!',
        name: "Jokes"
    })
})

//error route
router.get('*', (req, res) => {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>404 this page does not exist')
    }
})

module.exports = router