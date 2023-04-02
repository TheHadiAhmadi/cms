
type ModelContext = {
    // 

}

type ModelInsert<T> = (data: T) => T
type ModelUpdate<T> = (id: number, data: Partial<T>) => T
type ModelRemove<T> = (id: number) => boolean
type ModelGet<T> = (id: number) => T
type ModelQuery<T> = (options: any) => {data: T[], page: number, perPage: number, total: number}

export type Model<T> = {
    insert: ModelInsert<T>,
    update: ModelUpdate<T>,
    remove: ModelRemove<T>,
    get: ModelGet<T>,
    query: ModelQuery<T>,
}


export type ModelConstructor<T> = (ctx: ModelContext) => Model<T>

// export function BaseModel<T>(ctx: ModelContext): Model<T> {
//     // ctx.name,
//     // ctx.fields,
//     // ctx....

//     function insert() {
//         return {} as T
// // 
//     }

//     function update() {
//         return {} as T

// // 
//     }

//     function remove() {
//         return true

// // 
//     }

//     function get() {
//         return {} as T

//         // 
//     }

//     function query() {
//         return {
//             data: [], 
//             page: 1, 
//             perPage: 10,
//             total: 0
//         }
//     }
    
//     const result ={
//         insert,
//         update,
//         remove,
//         get,
//         query,
//         extend
//         // extend/(more) {
//             // return this
//         // }
//     }

//     function extend(more: any ) {
//         return {...result, ...more}
//     }
//     return result;
// }
