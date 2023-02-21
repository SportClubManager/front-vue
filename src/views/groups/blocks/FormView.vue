<template>
    <p v-if="cloneObject.id">ID: {{ cloneObject.id }}</p>
    <form class="p-4 space-y-2.5">
        <input v-model="cloneObject.name" placeholder="Name" required type="text">
        <div class="flex">
            <input ref="colorInput" v-model="cloneObject.color" class="w-12 h-9" required type="color">
            <input v-model="cloneObject.color" required type="text" @click="this.$refs.colorInput.click()">
        </div>
        <div class="flex space-x-4">
            <button class="button button-secondary" type="button" @click="onCancel">cancel</button>
            <button class="button button-primary" type="button" @click="onSave">save</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['submit', 'cancel']);
const props = defineProps({ group: Object });
const cloneObject = ref({ ...props.group });

const onSave = () => emit('submit', cloneObject.value);
const onCancel = () => emit('cancel');
</script>

<style scoped>
</style>