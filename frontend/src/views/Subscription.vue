<template>
  <div>This is {{ Trending }} Section...</div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  setup() {},
  beforeCreate() {
    console.log('Creating Subs Component');
  },
  data: () => ({
    Trending: 'Subscription View',
  }),
};
</script>
