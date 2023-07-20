const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000
const fetch = (...args)=> import('node-fetch').then(({ default: fetch })=> fetch(...args))
let count

router.use(express.static("public"))

/**
 * Build API
 */

// localhost:3000/api
router.get('/api', (request,response)=> {
    response.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Categories': `http://localhost:${PORT}/api/category`
    })
})

const filmRoutes = require('./api/filmRoutes')
router.use('/api/film', filmRoutes)

const actorRoutes = require('./api/actorRoutes')
router.use('/api/actor', actorRoutes)

const categoryRoutes = require('./api/categoryRoutes')
router.use('/api/category', categoryRoutes)

//home page => localhost:3000
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'Sakila Movie Rental'
    })
})

//film page => localhost:3000/film
router.get('/film', (req, res) => {
  const url = `http://localhost:${PORT}/api/film`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('pages/film', {
        title: 'Films',
        name: 'All Sakila Films',
        data,
      })
      return count = data.length
    })
})

router.get('/film/:id', (req, res) => {
  const id = req.params.id
  const url = `http://localhost:${PORT}/api/film/${id}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('pages/film_single', {
        title: `${data.title}`,
        name: `${data.title}`,
        data,
        count: count
      })
    })
})

//error page
router.get('*', (req, res) => {
    if (req.url === '/favicon.ico/') {
      res.end();
    } else {
      res.render('pages/404', {
        title: '404 Error',
        name: '404 Error'
      });
    }
  });  

module.exports = router