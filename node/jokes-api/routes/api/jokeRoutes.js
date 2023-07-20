const express = require('express')
const router = express.Router()

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
let count

fetch('https://api.sampleapis.com/jokes/goodJokes')
  .then(res => res.json())
  .then(data => (count = data.length))

router.get('/', (req, res) => {
  const url = 'https://api.sampleapis.com/jokes/goodJokes'

  fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('pages/jokes', {
        title: 'A lot of Jokes',
        name: 'A lot of Jokes',
        data,
      })
    })
})

// Adding type path => localhost:3000/:type
router.get('/type/:type', (req, res) => {
  const type = req.params.type
  const url = 'https://api.sampleapis.com/jokes/goodJokes'

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const typeArr = []

      data.forEach(item => {
        if (item.type == type) {
          typeArr.push(item)
        }
      })
      return typeArr
    })
    .then(typeArr => {
      res.render('pages/jokes', {
        title: type,
        name: `${type} jokes`,
        data: typeArr,
      })
    })
})

// localhost:3000/jokes/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  const url = `https://api.sampleapis.com/jokes/goodJokes/${id}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      res.render('pages/joke_single', {
        title: `${data.setup}`,
        name: `${data.setup}`,
        data,
        count,
      })
    })
})

module.exports = router
