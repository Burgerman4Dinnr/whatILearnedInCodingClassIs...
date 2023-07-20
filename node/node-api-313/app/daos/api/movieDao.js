const con = require('../../config/dbConfig');

const movieDao = {
    table: 'movie',

    create: (req, res) => {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create."
            });
        } else if (!req.body.title || !req.body.director_id || !req.body.producer_id) {
            res.json({
                "error": true,
                "message": "Must include a title, director id, and producer id."
            });
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);

            con.execute(
                `INSERT INTO movie SET ${fields.join('=?,')} = ?;`,
                values,
                (error, dbres) => {
                    if (!error) {
                        res.send(`Last id: ${dbres.insertId}`);
                    } else {
                        console.log(' DAD ERROR ', error);
                        res.send('Error creating record');
                    }
                }
            );
        }
    },

    update: (req, res) => {
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "id must be a number."
            });
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);

            con.execute(
                `UPDATE movie SET ${fields.join(' = ?, ')} = ? WHERE movie_id = ?;`,
                [...values, req.params.id],
                (error, dbres) => {
                    if (!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`);
                    } else {
                        console.log(' DAD ERROR ', error);
                        res.send('Error updating record');
                    }
                }
            );
        }
    },

    findByRating: (res, rating) => {
        con.execute(
            'SELECT * FROM movie WHERE rating = ?;',
            [rating],
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
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
};

module.exports = movieDao;
