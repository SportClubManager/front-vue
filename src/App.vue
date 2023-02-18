<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<template>
    <header-component />
    <div class="content flex flex-col items-center">
        <router-view :key="$route.path"/>
    </div>
</template>

<style scoped>
</style>
