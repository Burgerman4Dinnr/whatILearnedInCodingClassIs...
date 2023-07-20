// 1 Build server and port
const express = require('express')
const server = express()
//9b import router
const router = require('./router')
const PORT = process.env.PORT || 3000

// 3 Create a connection to database
const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
})

// 4 Connect to Database
// con.connect((error)=> {
//     if(!error) {
//         console.log('Database is connected...')
//     } else {
//         console.log('ERROR', error)
//     }
// })

con.connect(error => !error ? console.log('Connected') : console.log(error))


// 5 Root Route
server.get('/', (req, res)=> {
    res.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Customers': `http://localhost:${PORT}/api/customer`
    })
})

// 6 All Route
server.get('/api/film', (req, res)=> {
    con.query(
        'SELECT * FROM film;',
        (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log(error)
            }
        }
    )
})

server.get('/api/actor', (req, res)=> {
    con.query(
        'SELECT * FROM actor;',
        (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log(error)
            }
        }
    )
})

server.get('/api/customer', (req, res)=> {
    con.query(
        'SELECT * FROM customer;',
        (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log(error)
            }
        }
    )
})

// Single routes
server.get('/api/film/:id', (req, res)=> {
    const id = req.params.id
    con.query(
        'SELECT * FROM film WHERE film_id = ${id}',
        (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log(error)
            }
        }
    )
})

server.get('/api/actor/:id', (req, res)=> {
    const id = req.params.id
    con.query(
        'SELECT * FROM actor WHERE actor_id = ${id}',
        (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log(error)
            }
        }
    )
})

server.get('/api/customer/:id', (req, res)=> {
    const id = req.params.id
    con.query(
        'SELECT * FROM customer WHERE customer_id = ${id}',
        (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log(error)
            }
        }
    )
})

// 8 set the view engine => ejs
server.set('view engine', 'ejs')
// 9a use router
server.use('/', router)

// 2 Listen for the port
server.listen(PORT, ()=> console.log(`It's giving PORT: ${PORT}`))