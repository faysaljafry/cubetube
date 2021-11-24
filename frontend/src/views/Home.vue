<template>
  <div>
    This is {{ Trending }} Section...

    <Button
      label="Submit"
      class="p-button-info p-button-raised p-button-rounded"
    />
    <Dialog>This is a dialog</Dialog>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'App',

  setup() {},
  data: () => ({
    Trending: 'Home View',
  }),
};
</script>
