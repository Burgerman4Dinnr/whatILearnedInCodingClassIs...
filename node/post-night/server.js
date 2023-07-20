const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

const router = require('./router')
server.use('/', router)

const bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

// post data
server.post('/formProcess', (req,res)=> {
    console.log(req.body)
    res.render('process-page', {
        title: 'Success',
        name: 'Thank you for submitting',
        req: req.body
    })
})

server.set('view engine', 'ejs')

server.listen(PORT, ()=> console.log(`I am listening...`))