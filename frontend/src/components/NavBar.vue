<template>
  <div>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />

    <nav class="navbar navbar-expand-sm bg-dark">
      <h3 class="text-light">CubeTube</h3>
      <div>
        <InputText
          style="width: 50rem; margin-left: 12rem"
          id="search Field"
          v-model="search"
          type="text"
          class="display-6 mb-1 p-text-center"
          placeholder="Search For Videos, People and More"
        />
      </div>
    </nav>
    <br />
    <Sidebar v-model="visibleLeft"> Content </Sidebar>
    <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      visibleLeft: false,
    };
  },
  setup() {
    console.log('Loading Navbar');
  },
};
</script>
