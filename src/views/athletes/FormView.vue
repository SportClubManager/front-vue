<template>
    <p v-if="athlete.id">ID: {{ athlete.id }}</p>
    <form @submit.prevent="onSubmit" class="p-4 space-y-2.5">
        <input type="text" placeholder="First Name" v-model="athlete.firstName" required>
        <input type="text" placeholder="Last Name" v-model="athlete.lastName" required>

        <div class="flex">
            <input class="hidden" type="radio" name="sex" id="male" v-model="athlete.sex" value="male" />
            <label class="button button-secondary mr-2.5" for="male">Male</label>
            <input class="hidden" type="radio" name="sex" id="female" v-model="athlete.sex" value="female" />
            <label class="button button-secondary ml-2.5" for="female">Female</label>
        </div>

        <input type="date" v-model="athlete.dob" required>
        <input type="email" placeholder="email" v-model="athlete.email">
        <input type="phone" placeholder="phone" v-model="athlete.phone">
        <button class="button button-primary">Save</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ athlete: Object });
const emit = defineEmits(['submit']);
const athlete = ref(props.athlete);
const onSubmit = () => emit('submit', athlete.value);
</script>

<style scoped>
input[type="radio"]:checked + label {
    @apply text-teal-500 shadow-md shadow-teal-800 border-teal-600
}
</style>