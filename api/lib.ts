import polka, { Polka } from 'polka'
import cors from 'cors'
import {onError} from './utils.js'
import {json} from 'body-parser'
import {registerService} from './service.js'
import {Model} from './model.js'
import { Service } from './types.js'
import fs from 'fs'
import serve from 'serve-static'
import morgan from 'morgan'
// import knex from 'knex'

export type AppParams = {
    port: number
    services: Record<string, Service<any>>
    models: Record<string, Model<any>>
}

export function createApp({port = 3000, services = {}, models = {}}: AppParams): Polka {
    const app = polka({onError})
    
    app.use(cors())
    app.use(json())
    app.use(morgan('common'))

    
    app.use('/admin', serve('./public'))

    app.get('/admin/*', (req, res) => {
        console.log(req.url)
        res.end(fs.readFileSync('./public/index.html', 'utf-8'))
    })

    const { PORT = port } = process.env

    Object.keys(services).map(service => {

        console.log({service, name: services[service].name})
        registerService(app, models, service, services[service])
    })

    app.listen(PORT, () => console.log('App started on port ' + PORT))

    return app
}