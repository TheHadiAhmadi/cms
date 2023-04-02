import { CRUDService } from '../CRUDService.js'
import { CRUDServiceTypes, User } from '../types.js'
import { BaseService} from '../service.js'

function UserService(): CRUDServiceTypes<User> {
    return {
        ...CRUDService('users'),
        insert({body}) {
            return {
                id: 1,
                ...body                
            } as any
        },
        test(request) {
            console.log('test', request)
            return {
                message: 'TEST'
            }
        }
    }
}

function Test2Service(): CRUDServiceTypes<any> {
    return {
        ...CRUDService('test2'),
        insert(request) {
            return CRUDService('test2').insert(request)
        },
        another(request) {
            throw new Error('Something went wrong!!')
            return {
                message: 'WORKD'
            }
        },
        test(request) {
            return {request}
        }
    }
}
export const services = {
    user: UserService,
    test2: Test2Service,
    base: BaseService,
    roles: function RoleService() { return CRUDService('roles') }
}