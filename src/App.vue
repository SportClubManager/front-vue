<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<template>
    <header-component />
    <div class="content flex flex-col items-center">
        <RouterView />
    </div>
</template>

<style scoped>
</style>
