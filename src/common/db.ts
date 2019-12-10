import { config as configuration } from "../common/config";
import { DBConnection } from "../interfaces/dbConnection.interface";
const Sequelize = require('sequelize')

let db = null
let config = null

if (!db) {
    db = {}

    config = configuration(process.env.NODE_ENV || 'development')

    const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
            host: config.host,
            dialect: config.dialect,
            dialectOptions: {
                socketPath: config.dialectOptions.socketPath
            }
        })

    db['sequelize'] = sequelize

}

export default <DBConnection>db
export const mySequelize = db.sequelize