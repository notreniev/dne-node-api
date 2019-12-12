import { config as configuration } from "../common/config";
import { DBConnection } from "../interfaces/dbconnection.interface";
const Sequelize = require('sequelize')
const Mongoose = require('mongoose')

let postgresDb = null
let mongoDb = null
let config = null

if (!postgresDb) {
 postgresDb = {}

    config = configuration(process.env.NODE_ENV || 'development')

    const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
            host: config.hostdatabase,
            dialect: config.dialect,
            dialectOptions: {
                socketPath: config.dialectOptions.socketPath
            }
        })
     postgresDb['sequelize'] = sequelize
}

if (!mongoDb){
    Mongoose.connect('mongodb://root:root@host.docker.internal:27017/dnedb', {
        useNewUrlParser: true
    }, function(error){
        if (!error) return
        console.log('>>>>>>>>> falha na conexão', error)
    })
    
    mongoDb = Mongoose.connection
    //console.log('mongo connection', mongoDb)
    mongoDb.once('open', () => console.log('>>>>>>>> database rodando!!!'))
    mongoDb['connection'] = mongoDb
}

export default <DBConnection>postgresDb
export const mySequelize = postgresDb.sequelize
export const myMongo = mongoDb