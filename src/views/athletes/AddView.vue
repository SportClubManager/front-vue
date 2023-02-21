<template>
    <FormView :athlete="athlete" @submit="onSubmit" />
</template>

<script setup>
import { ref } from 'vue';
import { useAthletesStore } from '@/store/athletesStore';
import router from '@/router';
import FormView from '@/views/athletes/blocks/FormView.vue';

const athletesStore = useAthletesStore();
const athlete = ref({
    firstName: '',
    lastName: '',
    sex: '',
    dob: '2023-01-30',
    email: '',
    phone: '',
});

const onSubmit = () => {
    athletesStore.add(athlete.value);
    router.push({ name: 'athletes' });
};
</script>

<style scoped>
</style>