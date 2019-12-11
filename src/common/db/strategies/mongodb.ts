import { Model } from "../../interfaces/model.interface"
import ICrud from "./interfaces/interfaceCrud"


export class MongoDB<T> extends ICrud {
    model = null
    constructor(model: Model<T>) {
        super()
        this.model = model
    }

    create(item){
        console.log('O item fo salvo em MongoDB')
    }
}