<template>
    <FormView :athlete="athlete" @submit="onSubmit" />
</template>

<script setup>
import { ref } from 'vue';
import { useAthletesStore } from '@/store/athletesStore';
import router from '@/router';
import FormView from '@/views/athletes/FormView.vue';

const athletesStore = useAthletesStore();
const props = defineProps(['id']);
const athlete = ref(athletesStore.findById(props.id));

const onSubmit = () => {
    athletesStore.update(athlete.value);
    router.push({ name: 'athleteDetails', params: { id: athlete.value.id } });
};
</script>

<style scoped>
</style>