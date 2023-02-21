<template>
    <FormView :athlete="athlete" @cancel="onCancel" @submit="onSubmit" />
</template>

<script setup>
import { useAthletesStore } from '@/store/athletesStore';
import router from '@/router';
import FormView from '@/views/athletes/blocks/FormView.vue';

const athletesStore = useAthletesStore();
const props = defineProps(['id']);
const athlete = athletesStore.findById(props.id);

const onSubmit = a => {
    athletesStore.update(a);
    router.push({ name: 'athleteDetails', params: { id: a.id } });
};

const onCancel = () => {
    if (confirm('Discard changes?')) {
        router.push({ name: 'athleteDetails', params: { id: athlete.id } });
    }
};
</script>

<style scoped>
</style>