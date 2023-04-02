<script lang="ts">
  import AppDataTable from "$lib/data-table/AppDataTable.svelte";
  import type { DataTableHeader } from "$lib/data-table/DataTable.types";
import PageHeader from "$lib/layout/PageHeader.svelte";
  import PageTitle from "$lib/layout/PageTitle.svelte";
  import { UserService } from "$lib/service";
  import { Badge, Button, Icon } from "yesvelte";

  const service = UserService

  const headers: DataTableHeader[] = [
    {
      key: 'firstname',


      text: 'First Name',
      sortable: true,
      type: 'text'
    },
    {
      key: 'lastname',


      text: 'Last Name',
      sortable: true,
      type: 'text'
    },
    {
      key: 'status',
      text: 'Status',
      sortable: true,
      type: 'select',
      items: [
        'active', 'inactive'
      ],
      component: Badge,
      props(item) {
        return {
          color: item.status === 'active' ? 'green' : 'red',
          slot: item.status
        }
      },
    },
  ]

</script>
<PageHeader>
  <PageTitle>Users</PageTitle>
    <Button href="./add" color="primary">
        <Icon name="plus"/>
        Add User
    </Button>
</PageHeader>
<AppDataTable {headers} {service} />