<template>
    <p v-if="group.id">ID: {{ group.id }}</p>
    <form @submit.prevent="onSubmit" class="p-4 space-y-2.5">
        <input type="text" placeholder="Name" v-model="group.name" required>
        <div class="flex">
            <input class="w-12 h-9" type="color" v-model="group.color" required ref="colorInput">
            <input type="text" v-model="group.color" required @click="this.$refs.colorInput.click()">
        </div>

        <button class="button button-primary">Save</button>
    </form>


</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ group: Object });
const emit = defineEmits(['submit', 'eventDelete']);
const group = ref(props.group);

const onSubmit = () => emit('submit', group.value);
</script>

<style scoped>
</style>