<script lang='ts'>
    import { store } from "$lib/globalStore/store";
    import { get } from "svelte/store";
    import { Route } from "svelte-navigator";
    import { useNavigate } from "svelte-navigator";

    export let requiredRoll:string 

    const navigate = useNavigate()

    // applies route protection
    if((get(store).user.accessToken == '')){
        navigate('/unauthonticated')
    }
    if(get(store).user.roles.find(val => val ==requiredRoll) == undefined){
        navigate('/unauthorized')
    }

</script>

<slot></slot>






