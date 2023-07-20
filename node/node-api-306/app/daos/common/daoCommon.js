//connect to the database
const con = require('../../config/dbconfig')

const daoCommon = {
    findAll: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table};`,
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
    findById: (res, table, id) => {
        con.execute(
            `Select * FROM ${table} WHERE ${table}_id =?`,
            [id],
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

    countAll: (res, table) => {
        con.execute(
            `SELECT COUNT(*) count FROM ${table};`,
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

module.exports = daoCommon