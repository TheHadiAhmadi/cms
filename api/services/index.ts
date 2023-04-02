import { CRUDService } from '../CRUDService.js'
import { CRUDServiceTypes, User } from '../types.js'
import { BaseService} from '../service.js'
type TheUser = {
    id: number,
    firstname: string,
    lastname?: string,
    status: 'active' | 'inactive'
}

function UserService(): CRUDServiceTypes<TheUser> {
    return {
        ...CRUDService('users'),
        query(request) {
            return {
                data: [
                    {
                        id: 1,
                        firstname: 'Hadi',
                        lastname: 'Ahmadi',
                        status: 'active'
                    },
                    {
                        id: 2,
                        firstname: 'Jawad',
                        lastname: 'Azizi',
                        status: 'active'
                    },
                    {
                        id: 3,
                        firstname: 'Edriss',
                        lastname: 'Aria',
                        status: 'inactive'
                    },
                    
                ],
                perPage: 5,
                page: 1,
                total: 3
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