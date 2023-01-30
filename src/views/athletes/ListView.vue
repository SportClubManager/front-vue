<template>
    <table class="border-collapse table-auto w-full text-sm">
        <thead>
        <tr>
            <th>
                <p>Full Name</p>
                <p>(sex)</p>
            </th>
            <th>
                <p>DOB</p>
                <p>(age)</p>
            </th>
            <th class="text-right">
                <router-link :to="{name: 'addAthlete'}" class="button button-primary">+ add</router-link>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="athlete in athletes" :key="athlete.id">
            <td class="pl-8">
                <router-link :to="{name: 'athleteDetails', params: {id: athlete.id}}">{{ athlete.firstName }}
                    {{ athlete.lastName }}
                </router-link>
                <p>({{ athlete.sex }})</p>
            </td>
            <td>
                <p>{{ athlete.dob }}</p>
                <p>({{ age(athlete) }})</p>
            </td>
            <td class="text-right">
                <a href="#" class="button button-info">charge</a>
            </td>
        </tr>
        </tbody>
    </table>
    <pagination-component
        :totalPages="totalPages"
        :perPage="perPage"
        :maxVisibleButtons="5"
        :currentPage="currentPage"
        @pagechanged="onPageChange"
    />
</template>

<script setup>
import { useAthletesStore } from '@/store/athletesStore';
import { ref } from 'vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const athletesStore = useAthletesStore();
const currentPage = ref(1);
const perPage = ref(10);
const totalPages = ref(Math.ceil(athletesStore.athletes.length / perPage.value));
const athletes = ref(athletesStore.findAll(0, perPage.value));

const age = (athlete) => {
    let currentDate = new Date();
    let birthDate = new Date(athlete.dob);

    return Math.floor((currentDate - birthDate) / 31557600000);
};

const onPageChange = (page) => {
    currentPage.value = page;
    let from = Math.imul(perPage.value, page) - perPage.value;
    let to = Math.imul(perPage.value, page);
    athletes.value = athletesStore.findAll(from, to);
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
