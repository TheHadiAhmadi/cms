import { ServiceMethod, ServiceRequest } from "./types.js";

export function BaseService() { 
    return {}
}

function getHandler<T>(handler: ServiceMethod): any {
    return async (req: any, res: any) => {
        const request: ServiceRequest = {
            body: req.body,
        }
        const output = await handler(request)
        res.end(JSON.stringify(output))
    }
}

export function registerService(app: any, models: any, slug: string, service: any, api = true) {

    const handlers = service({slug, models})
    Object.keys(handlers).map(key => {
        const route = (api ? '/api/' : '/') + slug + '/' + key

        app.post(route, getHandler<any>(handlers[key]))
    })
}
