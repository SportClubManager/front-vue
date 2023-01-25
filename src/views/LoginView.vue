<template>
    <h2>Sign In</h2>
    <form @submit.prevent="handleSubmit">
        <input v-model="email" placeholder="email" />
        <input v-model="password" placeholder="password" type="password" />
        <button type="submit" :disabled="isPending">{{ isPending ? 'Pending...' : 'Sign In' }}</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore';

const email = ref('');
const password = ref('');
const isPending = ref(false);

const handleSubmit = async () => {
    isPending.value = true;

    const authStore = useAuthStore();
    try {
        await authStore.login(email.value, password.value);
    } catch (err) {
        console.log(err);
    }

    isPending.value = false;
};
</script>

<style scoped>
</style>