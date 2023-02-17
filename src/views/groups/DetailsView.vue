<template>
    <div class="w-full space-y-2.5 p-4">
        <p>ID: {{ group.id }}</p>
        <p>Name: {{ group.name }}</p>
        <p>Color: <span class="mx-2 px-2" :style="{'background-color': group.color}"></span> {{ group.color }}</p>
        <router-link
            :to="{name: 'groupUpdate', params: {id: group.id}}"
            class="button button-warning flex justify-center"
        >
            edit
        </router-link>
        <button class="button button-danger w-full" @click="remove">delete</button>

        <p>Events:</p>
        <event-list-view :events="group.events" @eventDelete="onEventDelete" @event-add="onEventAdd" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';
import { useGroupsStore } from '@/store/groupsStore';
import EventListView from '@/views/groups/EventsView.vue';

const props = defineProps(['id']);
const groupsStore = useGroupsStore();
const group = ref(groupsStore.findById(props.id));

const remove = () => {
    if (confirm(`Do you really want to delete group ${group.value.name}?`)) {
        groupsStore.deleteGroup(props.id);
        router.push({ name: 'groups' });
    }
};

const onEventDelete = id => groupsStore.deleteEvent(id);
const onEventAdd = event => groupsStore.addEvent(props.id, event);
</script>

<style scoped>
</style>
