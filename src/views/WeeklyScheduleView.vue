<template>
    <WeekComponent :groups="groups"/>
</template>

<script setup>
import WeekComponent from '@/components/Charts/WeekComponent.vue';
import { useGroupsStore } from '@/store/groupsStore';
import { ref } from 'vue';
const groupsStore = useGroupsStore();

const groups = ref(groupsStore.findAll(null, null));
</script>

<style scoped>
</style>