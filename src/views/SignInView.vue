<template>
    <h2>Sign In</h2>
    <form @submit.prevent="signIn">
        <input v-model="email" placeholder="email" />
        <input v-model="password" placeholder="password" type="password" />
        <button type="submit">Sign In</button>
    </form>
</template>

<script setup>
</script>

<style scoped>
</style>