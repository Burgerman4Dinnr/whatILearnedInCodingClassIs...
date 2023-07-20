const express = require('express');
const router = express.Router();

router.use(express.static('public'));

const charRoutes = require('./api/charRoutes');

router.use('/characters', charRoutes);

//home route
router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Rick and Morty Characters',
        name: 'Rick & Morty Characters',
        img: '/media/homePage.jpg'
    });
});

//error route
router.get('*', (req, res) => {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>404 - This is not the page you are looking for</h1>')
    }
})

module.exports = router