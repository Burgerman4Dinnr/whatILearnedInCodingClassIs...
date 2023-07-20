const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// Destructure actorDao
const { actorDao: dao } = require('../../daos/dao')

/**
 * GET
 */

// localhost:3000/api/actor
router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

//localhost:3000/api/actor/count
router.get('/count', (req, res) => {
    dao.countAll(res, dao.table)
})

//localhost:3000/api/actor/sort
router.get('/sort', (req, res)=> {
    dao.sort(req, res)
})

//localhost:3000/api/actor/letter/:letter
router.get('/letter/:letter', (req, res) => {
    dao.findByLetter(res, req.params.letter);
});

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


// let obj = {
//     id: 1,
//     name: 'Burgerman',
//     age: 43
// }

// let {age: myAge} = obj;

// console.log(myAge)