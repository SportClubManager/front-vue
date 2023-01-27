<template>
    <table class="border-collapse table-auto w-full text-sm">
        <thead>
        <tr>
            <th class=" pl-8 pt-0 pb-3   ">
                <p>Full Name</p>
                <p>(sex)</p>
            </th>
            <th class="  pr-8 pt-0 pb-3  ">
                <p>DOB</p>
                <p>(age)</p>
            </th>
            <th class="  pr-8 pt-0 pb-3  ">
                <p>Actions</p>
                <a href="#" class="text-green-500">add</a>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="athlete in athletesStore.athletes" :key="athlete.id">
            <td class="  pl-8  ">
                <p>{{ athlete.firstName }} {{ athlete.lastName }}</p>
                <p>({{ athlete.sex }})</p>
            </td>
            <td>
                <p>{{ athlete.dob }}</p>
                <p>({{ age(athlete) }})</p>
            </td>
            <td>
                <a href="#" class="block text-right text-yellow-500">edit</a>
                <a href="#" class="block text-right text-red-500">delete</a>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script setup>
import { useAthletesStore } from '@/store/AthletesStore';

const athletesStore = useAthletesStore();

const age = (athlete) => {
    let currentDate = new Date();
    let birthDate = new Date(athlete.dob);

    return Math.floor((currentDate - birthDate) / 31557600000);
};
</script>

<style scoped>
table th, table td {
    @apply border-b border-slate-600 p-4
}

table tbody * {
    @apply bg-zinc-700
}

table th > p:nth-child(n + 2), table td > p:nth-child(n + 2) {
    @apply text-xs text-slate-500
}
</style>