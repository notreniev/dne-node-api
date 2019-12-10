class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item){
        console.log('O item fo salvo em MongoDB')
    }
}

module.exports = MongoDB