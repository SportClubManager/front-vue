<template>
    <form-view :group="group" @cancel="onCancel" @submit="onSubmit" />
</template>

<script setup>
import router from '@/router';
import { useGroupsStore } from '@/store/groupsStore';
import FormView from '@/views/groups/blocks/FormView.vue';

const groupsStore = useGroupsStore();
const props = defineProps(['id']);
const group = groupsStore.findById(props.id);

const onSubmit = (g) => {
    groupsStore.update(g);
    router.push({ name: 'groupDetails', params: { id: g.id } });
};

const onCancel = () => {
    if (confirm('Discard changes?')) {
        router.push({ name: 'groupDetails', params: { id: group.id } });
    }
};
</script>

<style scoped>
</style>