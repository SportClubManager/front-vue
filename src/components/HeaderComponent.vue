<template>
    <header
        class="flex flex-wrap justify-between p-2.5 mb-2.5 border-b  border-teal-600 shadow-md shadow-teal-800 sticky top-0">
        <router-link v-if="headerStorage.toObject"
                     :to="headerStorage.toObject"
                     class="button button-primary">
            {{ headerStorage.toObject.title }}
        </router-link>
        <h1>{{ headerStorage.title }}</h1>
        <nav-component />
    </header>
</template>

<script setup>
import NavComponent from '@/components/NavComponent.vue';
import { useHeaderStore } from '@/store/headerStore';

const headerStorage = useHeaderStore();
</script>

<style scoped>
* {
    @apply bg-zinc-700 my-auto
}

header {
    transform-style: preserve-3d;
}
</style>