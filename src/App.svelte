<script lang="ts">
  import Form from "$form";
  import { modal } from "$lib/modal";
  import { ModalProvider } from "$modal";
  import { Button, El } from "yesvelte";
  import "yesvelte/css/tabler.min.css";

  let value = "";

  function onSubmit({ detail }) {
    console.log("form submitted", detail);
    value = JSON.stringify(detail, null, 2);
  }
</script>

// routing....

<El>
  <Form on:submit={onSubmit} let:form>
    <Form.Input label="Name:" name="name" />
    <Form.Input label="Email:" name="email" type="email" />
    <Form.Array label="Roles:" name="roles">
      <El row>
        <Form.Input col="4" name="value" />
        <Form.Input col="4" name="value2" />
        <Form.Input col="4" name="value3" />
      </El>
    </Form.Array>
    <Button on:click={() => form.fields["roles"].insert()}>ADD ROLE</Button>

    <!-- label="Test:" -->
    <Form.Object name="test">
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
    </Form.Object>

    <Button color="primary" type="submit">Submit</Button>
  </Form>
  <Button
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

</pre>
