const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

router.use(express.static('public'))

router.get('/api', (req, res) => {
    res.json({
        'All Movies': `http://localhost:${PORT}/api/movie`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Directors': `http://localhost:${PORT}/api/director`,
        'All Producers': `http://localhost:${PORT}/api/producer`,
        'All Genres': `http://localhost:${PORT}/api/genre`
    
    })
})

const endpoints = ['movie', 
'actor', 
'director', 
'genre', 
'producer' ]

const movieRoutes = require('./api/movieRoutes')
router.use('/api/movie', movieRoutes)

const directorRoutes = require('./api/directorRoutes')
router.use('/api/director', directorRoutes)

const actorRoutes = require('./api/actorRoutes')
router.use('/api/actor', actorRoutes)

router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Home',
        name: 'Burgerman'
    })
})

endpoints.forEach(endpoint => {
    router.get(`/${endpoint}`, (req, res)=> {
        const url = `http://localhost:${PORT}/api/${endpoint}`

        const fetch = (...args)=> import('node-fetch').then(({default: fetch})=> fetch(...args))

        fetch(url)
            .then(res => res.json())
            .then(data => {
                res.render(`pages/${endpoint}`, {
                    title: `All ${endpoint}s`,
                    name: `Our ${endpoint}s`,
                    data
                })
            })
    })

    // router.get(`/${endpoint}/:id`, (req, res)=> {
    //     const id = req.params.id
    //     const url = `http://localhost:${PORT}/api/${endpoint}/${id}`

    //     const fetch = (...args)=> import('node-fetch').then(({default: fetch })=> fetch(...args))

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             res.render(`pages/${endpoint}-single`, {
    //                 data
    //             })
    //         })
    // })
})
// router.get('/movies', (req, res) => {
//     const url = `http://localhost:${PORT}/api/movies`

//     const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/movies', {
//                 title: 'All Movies',
//                 name: 'Our Movies',
//                 data
//             })
//         })
// })

router.get('/actor/:id', (req, res)=> {
    const id = res.params.id
    const url = `https://localhost:${PORT}/api/actor/${id}`

    const fetch = (...args)=> import('node-fetch').then(({ default: fetch })=> fetch(...args))

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/actor-single', {
                title: `${data.fName} ${data.lName}`,
                name: `${data.fName} ${data.lName}`,
                data
            })
        })
})

// router.get('/directors', (req, res) => {
//     const url = `http://localhost:${PORT}/api/directors`

//     const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/directors', {
//                 title: 'All Directors',
//                 name: 'Our Directors',
//                 data
//             })
//         })
// })

router.get('/director/form', (req, res) => {
    res.render('pages/director_form', {
        title: 'Director Form',
        name: 'Director Form'
    })
})

// Error Page
router.get('*', (req, res) => {
    if (req.url === '/favicon.ico') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error',
            name: '404 Error'
        })
    }
})

module.exports = router