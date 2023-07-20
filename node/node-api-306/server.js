const express = require('express');
// const server = express();
const PORT = process.env.PORT || 3000;

// Security
const helmet = require('helmet');
const cors = require('cors');

// server.use(helmet()).use(cors()).use(express.json())
const server = express()
.use(cors())
.use(express.json())

server.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        crossOriginResourcePolicy: false,
        directives: {
            'img-src': ["'self'", "https: data:"]
        }
    })
)

server.set('view engine', 'ejs');

const router = require('./app/routes/router');
server.use('/', router);
server.listen(PORT, ()=> console.log(`And that's on PORT: ${PORT}`));