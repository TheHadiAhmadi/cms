<script lang="ts">
  import { ModalBody, ModalFooter, El } from "yesvelte";
  import Modal from "./Modal.svelte";
  import { modal } from "$lib/modal/store";

  import Form from "../form/AppForm.svelte";

  export let title: string | undefined = undefined;
  export let values: any = {};

  function onSubmit(event: CustomEvent<any>) {
    $modal.resolve(event.detail);
  }

  function onReset() {
    $modal.resolve(undefined);
  }
</script>

<Modal {title}>
  <Form bind:values on:submit={onSubmit} on:reset={onReset} let:form>
    <ModalBody>
      <slot {form} />
    </ModalBody>

    <ModalFooter>
      <El class="btn-list">
        <slot {form} name="actions" />
      </El>
    </ModalFooter>
  </Form>
</Modal>
