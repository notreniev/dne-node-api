const ContextStrategy = require('../common/db/strategies/base/contextStrategy')

const contextMongo = new ContextStrategy(new MongoDB())
//contextMongo.create({})
//contextMongo.read({})

const contextPostgres = new ContextStrategy(new Postgres())
//contextPostgres.create({})