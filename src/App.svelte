<script lang="ts">
  import Form from "$form";
  import { modal } from "$lib/modal";
  import { ModalProvider } from "$modal";
  import { Button, El } from "yesvelte";
  import { Route, Router } from "svelte-navigator";
  import "yesvelte/css/tabler.min.css";
  import SignUp from "$lib/routes/publicRoutes/auth/signUp/SignUp.svelte";
  import SignIn from "$lib/routes/publicRoutes/auth/signIn/SignIn.svelte";
  import AuthProvider from "$lib/routes/publicRoutes/auth/AuthProvider.svelte";
  import ProtectedRoute from "$lib/routes/publicRoutes/auth/ProtectedRoute.svelte";
  import PageNotFound from "$lib/routes/publicRoutes/notFound/PageNotFound.svelte";
  import Admin from '$lib/routes/protectedRoutes/admin/Admin.svelte';
  import AdminProfile from '$lib/routes/protectedRoutes/profile/Profile.svelte'
  import Profile from "$lib/routes/publicRoutes/profile/Profile.svelte";
  import { store } from "$lib/globalStore/store";
  import { get } from "svelte/store";

  let value = "";

  function onSubmit({ detail }) {
    console.log("form submitted", detail);
    value = JSON.stringify(detail, null, 2);
  }

let dynamicContent =Profile

const checkRoute =(pathname, protectedRoute = false)=>{
  console.log('pathname:',pathname)
  if(protectedRoute? (get(store).protectedRoutes.find((val) =>val==pathname) != undefined ): (get(store).publicRoutes.find((val) =>val==pathname) !=undefined  )){
    console.log('found')
    dynamicContent = Profile
    //fetch the content at the specific route
    return true
  }else{
    console.log('not found')
    return false

  }
}

</script>

<!-- Routing -->
<AuthProvider>
  <Router >
  <Route let:location path='/*'>
    
    <!-- public routes -->
    <Route  path="/" ><Profile /></Route> <!-- preview of website home page width out any privilages -->
    
    <!-- Dynamic routes -->
    
        {#if checkRoute(location.pathname)}
        <Route path={location.pathname} >
          <svelte:component this={dynamicContent}></svelte:component>
        </Route>
        {/if}
    <!-- Note
      there should be a list of dynamic public routes that is  loaded from backend
      and stored in the globalStore.
      Dynamic routes and pages are created by plugins and other stuffs.
      for any incoming route search the globalstore for route and content.
    -->
    <!-- -------------- -->
    
    <Route path="/signup"><SignUp /> </Route>
    <Route path="/signin"><SignIn /> </Route>
    <Route path="/unauthorized"><El>unauthorized</El> </Route>
    <Route path="/unautheticated"><El>unauthorized</El> </Route>
    <!-- --------------- -->

    <!-- protected routes -->
    <Route path="/admin/*">
      <ProtectedRoute requiredRoll='admin'>
        <Route path='/'><Admin /></Route> <!-- admin panel -->
        <Route path='/profile'><AdminProfile /></Route> <!-- preview of the website with admin previlages shown  -->

        <!-- Dynamic routes -->
        {#if checkRoute(location.pathname, true)}
        <Route path='*' >
          <svelte:component this={dynamicContent}></svelte:component>
        </Route>
        {/if}
        <!-- Note
          there should be a list of dynamic public routes that is  loaded from backend
          and stored in the globalStore.
          Dynamic routes and pages are created by plugins and other stuffs.    
          for any incoming route search the globalstore for route and content.
        -->
        <!-- ------------- -->

      </ProtectedRoute>
      <Route ><PageNotFound /></Route>
    </Route>

    <!-- --------------- -->

    <!-- for all of unknown routes would result to page not found -->
    <Route ><PageNotFound /></Route>
    <!-- --------------- -->
  </Route>
  </Router>
</AuthProvider>
<!-- -------------- -->

<!-- <El>
  <Form on:submit={onSubmit} let:form>
    <Form.Input  label="Name:" name="name" />
    <Form.Input label="Email:" name="email" type="email" />
    <Form.Array label="Roles:" nameaa="roles">
      <El row>
        <Form.Input col="4" name="value" />
        <Form.Input col="4" name="value2" />
        <Form.Input col="4" name="value3" />
      </El>
    </Form.Array>
    <Button on:click={() => form.fields["roles"].insert()}>ADD ROLE</Button> -->

    <!-- label="Test:" -->
    <!-- <Form.Object name="test">
      <Form.Radios
        label="Gender: "
        inline
        name="gender"
        items={["Male", "Female"]}
      />
      <Form.Checkboxes
        label="Roles: "
        name="roles"
        items={["Admin", "Editor", "Developer", "User"]}
      />
    </Form.Object> -->
<!-- 
    <Button color="primary" type="submit">Submit</Button>
  </Form> -->
  <!-- <Button
    on:click={() =>
      modal
        .confirm({
          title: "test",
          description: "lorem ipsum...",
        })
        .then((res) => {
          if (res) {
            console.log("clicked Ok");
          } else {
            console.log("clicked Cancel");
          }
        })}
  >
    OpenModal
  </Button>
</El>

<ModalProvider />

<pre>
  {value}

</pre> -->
