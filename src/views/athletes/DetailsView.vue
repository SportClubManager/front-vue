<template>
    <div class="w-full space-y-2.5 p-4">
        <p>First Name: {{ athlete.firstName }}</p>
        <p>Last Name: {{ athlete.lastName }}</p>
        <p>Sex: {{ athlete.sex }}</p>
        <p>Day Of Birth: {{ athlete.dob }}</p>
        <p>Email: {{ athlete.email }}</p>
        <p>Phone: {{ athlete.phone }}</p>
        <button class="button button-warning w-full">edit</button>
        <button class="button button-danger w-full">delete</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAthletesStore } from '@/store/athletesStore';

const athletesStore = useAthletesStore();
const props = defineProps(["id"]);
const athlete = ref(athletesStore.findById(props.id));
</script>

<style scoped>
</style>
