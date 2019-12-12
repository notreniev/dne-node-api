import { Model } from "../../../../interfaces/model.interface"
import ICrud from "../interfaces/interfaceCrud"


export class MongoDB<T> extends ICrud {
    model = null
    constructor(model: Model<T>) {
        super()
        this.model = model
    }

    create(item){
        console.log('O log foi salvo em MongoDB', item)
    }

    findAll = async () => {
        console.log('Lista de logs foi retornada do banco MongoDB')
    }

    findById = async (log) => {
        console.log(`O log foi retornado pelo banco MongoDB`)
    }

}