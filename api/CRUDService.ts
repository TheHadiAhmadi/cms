import { BaseService } from "./service.js";
import { CRUDServiceTypes } from "./types.js";

export function CRUDService<T>(params: any): CRUDServiceTypes<T> {
    return {
        ...BaseService(),
        insert(request) {
            return {
                id: 1,
                ...request.body
            }
        },
        update({body}) {
            return {} as any
        },
        query() {
            return {
                data: [],
                page: 1,
                perPage: 2,
                total: 1
            }
        },
        get() {
            return {
                // 
            } as any
        },
        remove({body: {id}}) {
            return false
        }
    }
}

export function RoleService() {
    return CRUDService('roles')
}

console.log(CRUDService, RoleService, CRUDService('users'))