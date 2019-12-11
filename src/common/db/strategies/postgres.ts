import ICrud from "./interfaces/interfaceCrud"


export class Postgres extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log('O item foi salvo em Postgres')
    }
}