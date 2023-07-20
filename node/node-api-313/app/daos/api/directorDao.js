const con = require('../../config/dbconfig')

const directorDao = {
    table: 'director',

    create: (req, res)=> {

        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else if(!req.body.lName) {
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO director SET ${fields.join(' =?, ')} = ?;`,
                values,
                (error,dbres) => {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log(' DAD ERROR ', error)
                        res.sent('Error creating record')
                    }
                }
            )
        }
    },
    update: (req, res)=> {
        if(isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "No fields to update."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE director SET ${fields.join(' =?, ')} = ? WHERE director_id = ?;`,
                [...values, req.params.id],
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log( ' DAD ERROR ', error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    },
     sort: (req, res)=> {
        con.execute(
            `SELECT * FROM director ORDER BY lName, fName;`,
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

module.exports = directorDao