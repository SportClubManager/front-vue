<template>
    <p v-if="cloneObject.id">ID: {{ cloneObject.id }}</p>
    <form class="p-4 space-y-2.5">
        <input v-model="cloneObject.firstName" placeholder="First Name" required type="text">
        <input v-model="cloneObject.lastName" placeholder="Last Name" required type="text">
        <select v-model="cloneObject.sex">
            <option disabled selected value="">Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <input v-model="cloneObject.dob" required type="date">
        <input v-model="cloneObject.email" placeholder="email" type="email">
        <input v-model="cloneObject.phone" placeholder="phone" type="phone">
        <div class="flex space-x-4">
            <button class="button button-secondary" type="button" @click="onCancel">cancel</button>
            <button class="button button-primary" type="button" @click="onSave">save</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['submit', 'cancel']);
const props = defineProps({ athlete: Object });
const cloneObject = ref({ ...props.athlete });
const onSave = () => emit('submit', cloneObject.value);
const onCancel = () => emit('cancel');
</script>

<style scoped>
</style>