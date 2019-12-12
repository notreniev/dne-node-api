import { Model } from "../../../../interfaces/model.interface"
import ICrud from "../interfaces/interfaceCrud"


export class MongoDB<T> extends ICrud {
    model = null
    constructor(model: Model<T>) {
        super()
        this.model = model
    }

    create(item){
        console.log('O item foi salvo em MongoDB')
        this.model.create(item.ceps.dataValues)
    }

    findAll = async () => {
        console.log('Lista de CEPs foi retornada do banco MongoDB')
        return await this.model.findAll({ raw: true })
    }

    findById = async (cep: string) => {
        console.log(`O CEP ${cep} foi retornado do banco MongoDB`)
        return await this.model.findAll({
            where: {
                cep: `${cep}`
            }
        })
    }

}