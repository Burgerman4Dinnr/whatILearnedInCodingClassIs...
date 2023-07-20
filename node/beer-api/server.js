const express = require('express');
const server = express()
const PORT = process.env.PORT || 3000

//Security
const cors = require('cors')
server.use(cors())
server.use(express.json())

const helmet = require('helmet')
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolice: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data:"]
    }
}))

const router = require('./app/routes/router')
server.use('/', router)

server.set('view engine', 'ejs')

server.listen(PORT, ()=> console.log (`ReferenceError: Error is caused by Erroring, please fix the Error.
at Object.<anonymous> (C:Users/kevinDesktop/2022Lessons/node/beer-api/app/routes/router.js:69.420)
at Module._compile (node:internal/modules/cjs/loader:1254:14)
at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
at Module.load (node:internal/modules/cjs/loader:1117:32)
at Module._load (node:internal/modules/cjs/loader:958:12)
at Module.require (node:internal/modules/cjs/loader:1141:19)
at require (node:internal/modules/cjs/helpers:110:18)
at Object.<anonymous> (C:Users/kevinDesktop2022Lessons/node/beer-api/server.js:20:16)
at Module._compile (node:internal/modules/cjs/loader:1254:14)
at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)

Node.js v18.14.1
[nodemon] app crashed - waiting for file changes before starting...
`))