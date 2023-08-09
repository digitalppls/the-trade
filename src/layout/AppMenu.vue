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
            }
        ]
    },

]);
</script>

<template>
    <AppSubMenu :model="model" />
</template>

<style lang="scss" scoped></style>
