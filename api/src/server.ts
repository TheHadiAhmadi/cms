import { services } from './services'
import {createApp,} from './lib.js'
// import {BaseModel} from './Model'

// const UserModel = BaseModel.extend({
//     id: 'string',
//     name: 'string',
//     email: 'string|email'
// })

// const UserModel = BaseModel
// const BaseModel




createApp({
    port: 3000,
    models: {
        // user: UserModel,
        // base: BaseModel,
    },
    services
})