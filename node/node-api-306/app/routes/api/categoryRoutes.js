const express = require('express')
const router = express.Router()


// Destructure categoryDao
const { categoryDao: dao } = require('../../daos/dao')

/**
 * GET
 */

// localhost:3000/api/category
router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

//localhost:3000/api/category/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table)
})

//localhost:3000/api/category/rating:rating
router.get('/rating/:rating', (req, res)=> {
    dao.findByRating(res, req.params.rating)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

/**
 * POST
 */
router.post('/create', (req, res)=> {
    dao.create(req, res)
})

/**
 * PATCH
 */
router.patch('/update/:id'), (req, res) => {
    dao.update(req, res)
}

module.exports = router