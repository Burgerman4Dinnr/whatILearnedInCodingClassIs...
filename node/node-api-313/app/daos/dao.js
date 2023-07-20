const daoCommon = require('./common/daoCommon')

const movieDao = {
    ...daoCommon,
    ...require('./api/movieDao')
}

const directorDao = {...daoCommon, ...require('./api/directorDao')}
const actorDao = {...daoCommon, ...require('./api/actorDao')}
// const producerDao = {...daoCommon, ...require('./api/producerDao')}
// const genreDao = {...daoCommon, ...require('./api/genreDao')}

module.exports = {
    movieDao,
    directorDao,
    actorDao,
    // producerDao,
    // genreDao
}
