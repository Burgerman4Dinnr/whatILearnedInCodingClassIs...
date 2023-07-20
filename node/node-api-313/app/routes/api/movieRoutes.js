const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

const { movieDao: dao} = require('../../daos/dao')

router.get('/', (req, res) => {
    dao.findAll(res, dao.table);
});

router.get('/count', (req, res) => {
    dao.countAll(res, dao.table);
});

router.get('/rating/rating', (req, res) => {
    dao.findByRating(res, req.params.rating);
});

router.get('/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id);
});

router.post('/create', (req, res) => {
    dao.create(res, req);
});

router.patch('/update/:id', (req, res) => {
    dao.update(res);
});
module.exports = router