export type User = {
    name: string,
    email: string,
    age?: string
}

export type ServiceRequest = {body: any}
export type ServiceMethod = (request: ServiceRequest) => any

export interface ServiceObject extends Record<string, ServiceMethod> {}
export type Service<T = ServiceObject> = (params?: any) => T

type WithID<T = {}> = T & {
    id: number
}

type GetRequest<T> = WithID
type GetResponse<T> = WithID<T>
type InsertRequest<T> = T
type InsertResponse<T> = WithID<T>
type UpdateRequest<T> = WithID<Partial<T>>
type UpdateResponse<T> = GetResponse<T>
type RemoveRequest<T> = WithID
type RemoveResponse<T> = boolean
type QueryRequest<T> = {sort: string, filters: string[], page: number, perPage: number, with: string[]} // relations...
type QueryResponse<T> = {perPage: number, page: number, total: number, data: WithID<T>[]}

type RequestType<T> = {body: T}

export interface CRUDServiceTypes<T> extends ServiceObject {
    insert: (request: RequestType<InsertRequest<T>>) => InsertResponse<T>,
    update: (request: RequestType<UpdateRequest<T>>) => UpdateResponse<T>,
    remove: (request: RequestType<RemoveRequest<T>>) => RemoveResponse<T>,
    get: (request: RequestType<GetRequest<T>>) => GetResponse<T>,
    query: (request: RequestType<QueryRequest<T>>) => QueryResponse<T>,
}