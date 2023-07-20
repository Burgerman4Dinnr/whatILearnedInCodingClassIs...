// 1 import express; create an instance of Router()
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// 3 create a fetch
const fetch = (...args)=> import('node-fetch').then(({default: fetch})=> fetch (...args))

// 4 use public folder; gives us access to public directory
router.use(express.static('public'))

//5 Create our pages
// 5a home page
router.get('/home', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'Sakila Home Page'
    })
})

//film page
router.get('/film', (req, res)=> {
    const url = `http://localhost:${PORT}/api/film`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            res.render('pages/film', {
                title: 'All Films',
                name: 'Sakila',
                data: data
            })
        })
})

// 5b error page
router.get('*', (req, res) => {
    if(req.url === '/favicon.ico/') {
        res.end();
    } else {
        res.send('<h1>404 ERROR - THIS PAGE DOES NOT EXIST!</h1>');
    }
});


//2 Export router
module.exports = router