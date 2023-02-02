<template>
    <div class="w-full space-y-2.5 p-4">
        <p>ID: {{ athlete.id }}</p>
        <p>First Name: {{ athlete.firstName }}</p>
        <p>Last Name: {{ athlete.lastName }}</p>
        <p>Sex: {{ athlete.sex }}</p>
        <p>Day Of Birth: {{ athlete.dob }} ({{ ageCalculator(athlete.dob) }})</p>
        <p>Email: <a :href="'mailto:' + athlete.email" target="_blank">{{ athlete.email }}</a></p>
        <p>Phone: <a :href="'tel:' + athlete.phone" target="_blank">{{ athlete.phone }}</a></p>
        <router-link
            :to="{name: 'athleteUpdate', params: {id: athlete.id}}"
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
import { useAthletesStore } from '@/store/athletesStore';
import ageCalculator from '../../services/AgeCalculator';

const props = defineProps(['id']);
const athletesStore = useAthletesStore();
const athlete = ref(athletesStore.findById(props.id));

const remove = () => {
    if (confirm(`Do you really want to delete athlete ${athlete.value.firstName} ${athlete.value.lastName}?`)) {
        athletesStore.delete(props.id);
        router.push({ name: 'athletes' });
    }
};
</script>

<style scoped>
</style>
