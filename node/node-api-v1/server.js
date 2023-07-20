//1 import express and build a port
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

//3 create a connection to database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
});

//4 connect to the database
connection.connect((error) => {
    if (!error) {
        console.log('Database is connected...');
    } else {
        console.log('Error', error);
    }
});

//5 Root route
//Get method => (path, callback function)
server.get('/', (req, res) => {
    res.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Customers': `http://localhost:${PORT}/api/customer`
    });
});

//6 All routes
server.get('/api/film', (req, res) => {
    //query method => (sql query, callback function)
    connection.query(
        'SELECT * FROM film;',
        (error, rows) => {
            if (!error) {
                if (rows.length === 1) {
                    res.json(...rows);
                } else {
                    res.json(rows);
                }
            } else {
                console.log('ERROR!!!', error);
            }
        }
    );
});

server.get('/api/actor', (req, res) => {
    // query method => (sql query, callback func)
    connection.query(
        'SELECT * FROM actor;',
        (error, rows) => {
            if (!error) {
                if (rows.length === 1) {
                    res.json(...rows);
                } else {
                    res.json(rows);
                }
            } else {
                console.log('ERROR!!!', error);
            }
        }
    );
});

server.get('/api/customer', (request, response) => {
    connection.query(
        'SELECT * FROM customer;',
        (error, rows) => {
            if (!error) {
                if (rows.length === 1) {
                    response.json(...rows);
                } else {
                    response.json(rows);
                }
            } else {
                console.log('ERROR!!!', error);
            }
        }
    );
});


// Single route
server.get('/api/film/:id', (req, res)=> {
    const id = req.params.id
    // console.log(id)

    connection.query(
        `SELECT * FROM film where film_id = ${id};`, (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    console.log('ERROR', error)
                }
            }
        }
    )
})

server.get('/api/actor/:id', (req, res)=> {
    const id = req.params.id
    // console.log(id)

    connection.query(
        `SELECT * FROM actor where actor_id = ${id};`, (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    console.log('ERROR', error)
                }
            }
        }
    )
})

server.get('/api/customer/:id', (req, res)=> {
    const id = req.params.id
    // console.log(id)

    connection.query(
        `SELECT * FROM film where customer_id = ${id};`, (error, rows)=> {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    console.log('ERROR', error)
                }
            }
        }
    )
})
//2 listen to the port
// .listen(port, callback function)
server.listen(PORT, () => console.log(`It's the PORT ${PORT} for me...`));