<script>
  import Form from "$lib/form";
  import PageForm from "$lib/layout/PageForm.svelte";

  let title = "Add User"

  let values = {}

  function onSubmit({detail}) {
    console.log(detail)
  }
   
</script>

<PageForm bind:values {title} on:submit={onSubmit} cancelHref='..'>
    <Form.Input name="firstname" label="First Name" />
    <Form.Input name="lastname" label="Last Name" />
    <Form.Radios name="status" label="Status" items={['active', 'inactive']} />
</PageForm>
