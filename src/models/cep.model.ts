import { config } from "../common/config"
import { mySequelize } from "../common/db"
const Sequelize = require('sequelize')
const conf = config(process.env.NODE_ENV || 'development')
const sequelize = mySequelize

export const CepSchema = () => {
    const cep = sequelize.define('ceps', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        bairro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cep: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING,
            allowNull: false
        },
        complemento2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        end: {
            type: Sequelize.STRING,
            allowNull: false
        },
        uf: {
            type: Sequelize.STRING,
            allowNull: false
        }

    }, {
        tableName: 'ceps',
        freezeTableName: false,
        timestamps: false
    })

    return cep
}

const Cep = CepSchema()

export class CepModel {

    constructor() {
    }

    create = async (cep) => {
        Cep.create({cep: { cep }})
        await Cep.sync()
    }

    findAll = async () => {
        return await Cep.findAll({ raw: true })
    }

    findById = async (id: number) => {
        return await Cep.findAll({
            where: {
                id: id
            }
        })
    }

}
