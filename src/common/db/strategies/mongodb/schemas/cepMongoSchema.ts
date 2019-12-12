const Mongoose = require('mongoose')

const cepMongoModel = () => {
    const cep = new Mongoose.Schema({
        id: {
            type: Number,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        bairro: {
            type: String,
            allowNull: false
        },
        cep: {
            type: String,
            allowNull: false,
            unique: true
        },
        cidade: {
            type: String,
            allowNull: false
        },
        complemento2: {
            type: String,
            allowNull: true
        },
        end: {
            type: String,
            allowNull: false
        },
        uf: {
            type: String,
            allowNull: false
        }
    })

    return cep
}

export const CepMongoModel = Mongoose.model('ceps', cepMongoModel())