class ContextStrategy extends ICrud{
    database
    constructor(strategy) {
        super()
        this.database = strategy
    }

    create(item) {
        return this.database.create(item)
    }

    read(item) {
        return this.database.read(item)
    }

    update(id, item) {
        return this.database.update(id, item)
    }

    delete(id) {
        return this.database.delete(id)
    }
}

export default ContextStrategy