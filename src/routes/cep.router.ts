import express = require('express')
import { Router } from "../common/interfaces/router.interface"
import { CepModel } from '../models/cep.model'

class CepRouter extends Router {
    model = null

    constructor() {
        super()
        this.model = new CepModel()
    }

    applyRoutes(application: express.Application) {
        application.get('/cep', this.findAll)
        application.get('/cep/:id', this.findById)
        application.get('cep/add', this.create)
    }
    
    findAll = async (req: express.Request, res: express.Response) => {
        //res.status(200).json(await this.model.findAll())
        res.status(200).json('teste')
    }

    findById = async (req: express.Request, res: express.Response) => {
        const { id } = req.params
        res.status(200).json(await this.model.findById(id))
    }

    create = (req: express.Request, res: express.Response) => {
        const { cep } = req.body
        this.model.create(cep)
    }

}

export const cepRouter = new CepRouter()