const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const helmet = require('helmet');
const cors = require('cors');

const server = express().use(cors());

server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
        "img-src": ["'self'", "https:", "data:"]
    }
}));

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

server.set('view engine', 'ejs')

const router = require('./app/routes/router')
server.use('/', router)

server.listen(PORT, ()=> console.log(`ERROR: port ${PORT} is not found. Nevermind it's working now`))