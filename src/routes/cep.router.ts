var soap = require('soap');
import express = require('express')
import { ContextStrategy } from '../common/db/strategies/base/contextStrategy';
import { MongoDB } from '../common/db/strategies/mongodb';
import { Postgres } from '../common/db/strategies/postgres';
import { Router } from '../interfaces/router.interface';
import { CepModel } from '../models/cep.model';

const url = "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";
const cepModel = CepModel()

class CepRouter extends Router {
    contextPostgres = null
    contextMongo = null

    constructor() {
        super()
        this.contextPostgres = new ContextStrategy(new Postgres(cepModel))
        this.contextMongo = new ContextStrategy(new MongoDB(cepModel))  
    }

    getSoapDataAsync = async (url, args) => {
        const client = await soap.createClientAsync(url)
        return client.consultaCEPAsync(args, (err, result) => {
            return result
        })
    }
    
    applyRoutes(application: express.Application) {
        application.get('/cep', this.findAll)
        application.get('/cep/:cep', this.findById)
        application.get('cep/add', this.create)
    }
    
    findAll = async (req: express.Request, res: express.Response) => {
        try {
            const response = await this.contextPostgres.findAll()
            res.status(200).json(response)
        } catch (error) {
            res.status(200).json('error: ' + error)
        }
    }

    findById = async (req: express.Request, res: express.Response) => {
        const retorno = {}
        try {            
            const args = {cep: parseInt(req.params.cep)}
            const query = await this.contextPostgres.findById(args.cep)
            if (!query[0]){
                const response = await this.getSoapDataAsync(url, args)
                retorno['result'] = response[0].return
                this.contextPostgres.create(response[0].return)
                console.log('Inseriu no banco postgres')
            }else{
                console.log('retornou na consulta do banco')
                retorno['result'] = query
            }
        } catch (error) {
            retorno['error'] = error.cause.root.Envelope.Body.Fault.faultstring || error
        }
        res.send(retorno)
    }

    create = (req: express.Request, res: express.Response) => {
        const { cep } = req.body
        this.contextPostgres.create(cep)
    }

}

export const cepRouter = new CepRouter()