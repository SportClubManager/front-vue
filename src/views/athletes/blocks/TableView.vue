<template>
    <table-component>
        <template #thead>
            <th>Full Name <span>(sex)</span></th>
            <th>DOB <span>(age)</span></th>
            <slot name="head" />
        </template>
        <template #tbody>
            <tr v-for="athlete in athletes" :key="athlete.id">
                <td class="text-left pl-8">
                    <router-link :to="{name: 'athleteDetails', params: {id: athlete.id}}"
                                 class="whitespace-nowrap"
                    >{{ athlete.firstName }} {{ athlete.lastName }}
                    </router-link>
                    <br><span>({{ athlete.sex }})</span>
                </td>
                <td>{{ athlete.dob }}<br><span>({{ ageCalculator(athlete.dob) }})</span></td>
                <slot :athlete="athlete" name="body" />
            </tr>
        </template>
    </table-component>
</template>

<script setup>
import TableComponent from '@/components/TableComponent.vue';
import ageCalculator from '../../../services/AgeCalculator';

defineProps({
    athletes: { type: Array, required: true },
});
</script>

<style scoped>
</style>