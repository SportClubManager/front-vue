<template>
    <form-view :group="group" @submit="onSubmit" />
</template>

<script setup>
import router from '@/router';
import { useGroupsStore } from '@/store/groupsStore';
import FormView from '@/views/groups/FormView.vue';

const groupsStore = useGroupsStore();
const props = defineProps(['id']);
const group = groupsStore.findById(props.id);

const onSubmit = () => {
    groupsStore.update(group);
    router.push({ name: 'groupDetails', params: { id: group.id } });
};
</script>

<style scoped>
</style>