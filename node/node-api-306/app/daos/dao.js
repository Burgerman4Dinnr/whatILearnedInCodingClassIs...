const daoCommon = require('./common/daoCommon')

const filmDao = {
    ...daoCommon,
    ...require('./api/filmDao')
}

const actorDao = {
    ...daoCommon, 
    ...require('./api/actorDao')
}

const categoryDao = {
    ...daoCommon,
    ...require('./api/categoryDao')
}

module.exports = {
    filmDao,
    actorDao,
    categoryDao    
}