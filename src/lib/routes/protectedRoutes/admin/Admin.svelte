<script>
    import Layout from "$lib/layout/Layout.svelte";
    import { El } from "yesvelte";
    import { Sidebar, SidebarItem } from "yesvelte/sidebar";
    // import { slide } from "svelte/transition";
    import HeaderItem from "$lib/layout/HeaderItem.svelte";
    export let compactMode = false
</script>

<svelte:head>
    <!-- changes the title of browse tab  -->
    <title>Dashboard</title>
</svelte:head>

<Layout on:onCompacktModeChange={()=>compactMode = !compactMode} compactMode = {compactMode}>
    <!-- this attaches to header of page -->
    <El slot='headerItems'>
        <!-- you can add items dynamically -->
        <HeaderItem>user</HeaderItem>
        <HeaderItem shape='pill'>theme</HeaderItem>
    </El>
    <Sidebar hidden={compactMode}  d={compactMode? 'none':'block'} style="position:relative ;display:none" theme='dark' slot = 'sideBarItems'>
        <!-- this is the place for sidebar options -->
        <!-- items should be added dynamicaly -->
        <SidebarItem title='dashboard'></SidebarItem>
        <SidebarItem title='pages'></SidebarItem>
        <SidebarItem title='posts'></SidebarItem>
    </Sidebar>
    <El>
        <!-- based on the item of sibed selected the data could be rendered here in the main section -->
        <El tag='h1'> content based on the side bar selection</El>

    </El>
</Layout>

