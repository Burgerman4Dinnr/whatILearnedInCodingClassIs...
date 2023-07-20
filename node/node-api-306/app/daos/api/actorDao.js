const con = require('../../config/dbconfig')

const actorDao = {
    table: 'actor',

    create: (req, res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body) // create an array
            const values = Object.values(req.body) //create an array

            con.execute(
                `INSERT INTO ACTOR SET ${fields.join(' = ?,')} = ?;`,
                values,
                (error, dbres) => {
                    if(!error) {
                        res.send(`"ast id: ${dbres.insertId}`)
                    } else {
                        console.log(' DAD ERROR ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res) => {
        if(!isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number."
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)
            
            con.execute(
                `UPDATE actor SET ${fields.join (' = ?, ')} = ? WHERE actor_id = ?;`
                (...values, req.params.id),
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Changed ${dbres.changeRows} row(s)`)
                    } else {
                        console.log(' DAD ERROR ', error)
                        res.send(`Error updating record`)
                    }
                }
            )
        }
    },

    sort: (req, res) => {
        con.execute(
            'SELECT * FROM actor ORDER BY last_name, fist_name;',
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAD ERROR ', error)
                }
            }
        )
    },
    findByLetter: (res, letter) => {
        con.execute(
            `SELECT * FROM actor WHERE last_name LIKE '${letter}'%;`,
            [letter],
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAD ERROR ', error)
                }
            }
        )
    }
}

module.exports = actorDao