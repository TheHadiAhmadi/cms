<script>
    

import {setContext} from 'svelte'

console.log('authprovider')

let authContext = setContext('authContext', {
    name: "",
    password:"" ,
    accesstoken: "",
    roles: [],
    setAccessToken:  (newToken) =>{this.accesstoken = newToken}
})
</script>

<slot></slot>    