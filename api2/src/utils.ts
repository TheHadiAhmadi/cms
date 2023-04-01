import { Middleware } from "polka"

export function onError(err: any, req: any, res: any, _next: any) {
    res.end(JSON.stringify({
        code: err.code || err.status || 500,
        message: (err.length && err) || err.message
    }))
}


export function jsonMiddleware(): Middleware {
    return (req, res, next) => {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
            console.log('chunk: ', chunk)
        })
    
        req.on('end', () => {
            try {
                if(body) {
                    req.body = JSON.parse(body)
                }
            
                next()
            } catch(e: any) {
                next(e)
            }
        })
    }
}


