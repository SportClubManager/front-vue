<template>
    <div class="w-full space-y-2.5 p-4">
        <p>ID: {{ group.id }}</p>
        <p>Name: {{ group.name }}</p>
        <p>Color: <span :style="{'background-color': group.color}" class="mx-2 px-2"></span> {{ group.color }}</p>
        <router-link :to="{name: 'groupAthletes', params: {groupId: group.id}}"
                     class="button button-primary flex justify-center">
            athletes - {{ group.athletes.length }}
        </router-link>
        <router-link :to="{name: 'groupUpdate', params: {id: group.id}}"
                     class="button button-warning flex justify-center">
            edit
        </router-link>
        <button class="button button-danger w-full" @click="onGroupDelete">delete</button>

        <p>Schedule:</p>
        <schedule-view :schedule="group.schedule" @eventDelete="onEventDelete" @event-add="onEventAdd" />
        <button class="button button-info w-full" @click="showScheduleChart = true">schedule chart</button>
        <modal-component v-if="showScheduleChart" @close="showScheduleChart = false">
            <template #body>
                <week-component :groups="groupsStore.findAll()" />
            </template>
        </modal-component>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import router from '@/router';
import { useGroupsStore } from '@/store/groupsStore';
import { useHeaderStore } from '@/store/headerStore';
import ScheduleView from '@/views/groups/blocks/ScheduleView.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import WeekComponent from '@/components/Schedule/WeekComponent.vue';

const props = defineProps(['id']);
const groupsStore = useGroupsStore();
const headerStore = useHeaderStore();
const group = ref(groupsStore.findById(props.id));
const showScheduleChart = ref(false);

onMounted(() => {
    headerStore.setToObject({ name: 'groups', title: 'Groups list' });
});

const onGroupDelete = () => {
    if (confirm(`Confirm to delete group ${group.value.name}.`)) {
        groupsStore.deleteGroup(props.id);
        router.push({ name: 'groups' });
    }
};

const onEventAdd = event => groupsStore.addEvent(props.id, event);
const onEventDelete = id => {
    if (confirm(`Confirm to delete event.`)) {
        groupsStore.deleteEvent(id);
    }
};
</script>

<style scoped>
</style>
