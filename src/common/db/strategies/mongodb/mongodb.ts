import * as mongoose from 'mongoose'
import ICrud from "../interfaces/interfaceCrud"

export class MongoDB<D extends mongoose.Document> extends ICrud {
    
    constructor(protected model: mongoose.Model<D>) {
        super()
    }

    create(item){
        console.log('model: ', (<any>this.model), 'item', item)
        let document = new (<any>this.model).log(item)
        //console.log('document', document)
        // document.save()
        //     .then(res => console.log('documento salvo com sucesso'))
        //     .catch(err => console.error('erro ao tentar salvar documento', err))
    }

    findAll = async () => {
        console.log('Lista de logs foi retornada do banco MongoDB')
    }

    findById = async (log) => {
        console.log(`O log foi retornado pelo banco MongoDB`)
    }

}