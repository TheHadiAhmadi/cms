<script lang="ts">
  import UserList from "./pages/users/UserList.svelte";
 
  import UserEditor from "./pages/users/UserEditor.svelte";
  import AppPage from "$lib/layout/AppPage.svelte";
  import { Route, Router } from "svelte-navigator";

  import "yesvelte/css/tabler.min.css";
  import "./app.css";
  

</script>

<Router>
  <h1>NAV</h1>
  <div class="main">
    <Route path="/admin/*">
      <AppPage>
        
      <Route path="/">
        / Main page
      </Route>
      <Route path="/users/*">
        <Route path="/">
          <UserList />
        </Route>
        <Route path="/add">
          <UserEditor/>
        </Route>
      </Route>
      <Route path="/blog/*">
        NESTED
        <Route path="/">
          Blog
        </Route>
        <Route path=":id">
          BLog :id
        </Route>
      </Route>
    </AppPage>

    </Route>
  </div>
</Router>
