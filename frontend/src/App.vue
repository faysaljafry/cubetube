<template>
  <div>
    <!-- <sidebar-menu :menu="menu" /> -->
    <router-view name="NavBar"></router-view>
    <router-view></router-view>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
// import { SidebarMenu } from 'vue-sidebar-menu';
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user',
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link',
            },
          ],
        },
      ],
    };
  },
  // setup() {},
  components: {
    SidebarMenu,
  },
};
</script>
