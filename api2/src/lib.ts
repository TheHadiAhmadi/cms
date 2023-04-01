import polka, { Polka } from 'polka'
import cors from 'cors'
import {onError, jsonMiddleware} from './utils.js'
import {registerService} from './service.js'
import {Model} from './model.js'
import { Service } from './types.js'
// import knex from 'knex'

export type AppParams = {
    port: number
    services: Record<string, Service<any>>
    models: Record<string, Model<any>>
}

export function createApp({port = 3000, services = {}, models = {}}: AppParams): Polka {
    const app = polka({onError})
    
    app.use(cors())
    app.use(jsonMiddleware())


    const { PORT = port } = process.env

    Object.keys(services).map(service => {

        console.log({service, name: services[service].name})
        registerService(app, models, service, services[service])
    })
    
    app.listen(PORT, () => console.log('App started on port ' + PORT))

    return app
}