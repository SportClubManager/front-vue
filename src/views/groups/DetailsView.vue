<template>
    <div class="w-full space-y-2.5 p-4">
        <p>ID: {{ group.id }}</p>
        <p>Name: {{ group.name }}</p>
        <p>{{ startTime }}</p>
        <router-link
            :to="{name: 'groupUpdate', params: {id: group.id}}"
            class="button button-warning flex justify-center"
        >
            edit
        </router-link>
        <button class="button button-danger w-full" @click="remove">delete</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { useGroupsStore } from '@/store/groupsStore';

const props = defineProps(['id']);
const groupsStore = useGroupsStore();
const group = ref(groupsStore.findById(props.id));

const startTime = ref(360);

console.log(group.value);

const remove = () => {
    if (confirm(`Do you really want to delete group ${group.value.name}?`)) {
        groupsStore.delete(props.id);
        router.push({ name: 'groups' });
    }
};
</script>

<style scoped>
</style>
