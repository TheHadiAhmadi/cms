import { writable } from "svelte/store";

export const store = writable({
    user: {
        name: '',
        password: '',
        roles: ['admin', 'user'],
        accessToken: '294809h34c0hcn10n38c0194809'
    },
    publicRoutes:[
        '/Route1',
        '/Route2'
    ],
    protectedRoutes:[
        '/admin/Route3',
        '/admin/Route4'
    ]

})