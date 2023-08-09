<script setup>
import { ref } from 'vue';

import AppSubMenu from './AppSubMenu.vue';
const model = ref([
  {
    label: 'Dashboards',
    icon: 'pi pi-home',
    items: [
      {
        label: 'routes.Myaccounts',
        icon: 'pi pi-fw pi-credit-card',
        to: '/'
      },
      {
        label: 'routes.trade',
        icon: 'pi pi-fw pi-arrows-h',
        to: '/trade'
      },
      {
        label: 'routes.topUp',
        icon: 'pi pi-fw pi-download',
        to: '/top-up'
      },
      {
        label: 'routes.withdraw',
        icon: 'pi pi-fw pi-money-bill',
        to: '/withdraw'
      },
      {
        label: 'routes.verify',
        icon: 'pi pi-fw pi-verified',
        to: '/verify'
      }
    ]
  },

]);
</script>

<template>
    <AppSubMenu :model="model" />
</template>

<style lang="scss" scoped></style>
