const { notFound, internalServerError } = require("../middlewares/handleError")
const insert = require('./insert')
const search = require('./search')
const test = require('./test')

const BASE_ENDPOINT = '/api/v1/'
const initWebRoutes = (app) => {
  app.use(`${BASE_ENDPOINT}insert`, insert)
  app.use(`${BASE_ENDPOINT}search`, search)
  app.use('/', test)
  

  app.use(notFound)
  app.use(internalServerError)
}

module.exports = initWebRoutes