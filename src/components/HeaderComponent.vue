<template>
    <header class="flex flex-wrap justify-between p-2.5 mb-2.5 bg-zinc-700 border-b  border-teal-600 shadow-amber-50 shadow-md shadow-teal-800 sticky top-0">
        <h1 class="bg-zinc-700">{{ headerStorage.title }}</h1>
        <nav-component/>
    </header>
</template>

<script setup>
import NavComponent from '@/components/NavComponent.vue';
import { useHeaderStore } from '@/store/headerStore';

const headerStorage = useHeaderStore();
</script>

<style scoped>
header {
    transform-style: preserve-3d;
}
</style>