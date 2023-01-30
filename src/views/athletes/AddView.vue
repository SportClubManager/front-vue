<template>
    <form @submit.prevent="onSubmit" class="p-4 space-y-2.5">
        <input type="text" placeholder="First Name" v-model="firstName" required>
        <input type="text" placeholder="Last Name" v-model="lastName" required>

        <div class="flex">
            <input class="hidden" type="radio" name="sex" id="male" v-model="sex" value="male" />
            <label class="button button-secondary mr-2.5" for="male">Male</label>
            <input class="hidden" type="radio" name="sex" id="female" v-model="sex" value="female" />
            <label class="button button-secondary ml-2.5" for="female">Female</label>
        </div>

        <input type="date" v-model="dob" required>
        <input type="email" placeholder="email" v-model="email">
        <input type="phone" placeholder="phone" v-model="phone">
        <button class="button button-primary">Save</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useAthletesStore } from '@/store/athletesStore';
import router from '@/router';

const athletesStore = useAthletesStore();
const firstName = ref('');
const lastName = ref('');
const sex = ref('');
const dob = ref('');
const email = ref('');
const phone = ref('');

const onSubmit = () => {
    athletesStore.add({
        firstName: firstName.value,
        lastName: lastName.value,
        sex: sex.value,
        dob: dob.value,
        email: email.value,
        phone: phone.value,
    });

    router.push({name: 'athletes'})
};
</script>

<style scoped>
input[type="radio"]:checked + label {
    @apply text-teal-500 shadow-md shadow-teal-800 border-teal-600
}
</style>