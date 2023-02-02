<template>
    <table class="border-collapse table-auto w-full text-sm">
        <thead>
        <tr>
            <th class="text-left">Name</th>
            <th class="text-right">
                <router-link :to="{name: 'addGroup'}" class="button button-primary">+ add</router-link>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="group in groups" :key="group.id">
            <td class="pl-8">
                <router-link :to="{name: 'groupDetails', params: {id: group.id}}">{{ group.name }}</router-link>
            </td>
            <td class="text-right">
                <router-link
                    class="button button-primary"
                    :to="{name: 'groupDetails', params: {id: group.id}}"
                >
                    view
                </router-link>
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
import { ref } from 'vue';
import { useGroupsStore } from '@/store/groupsStore';
import PaginationComponent from '@/components/PaginationComponent.vue';

const groupsStore = useGroupsStore();
const currentPage = ref(1);
const perPage = ref(10);
const totalPages = ref(Math.ceil(groupsStore.groups.length / perPage.value));
const groups = ref(groupsStore.findAll(0, perPage.value));

const onPageChange = (page) => {
    currentPage.value = page;
    let from = Math.imul(perPage.value, page) - perPage.value;
    let to = Math.imul(perPage.value, page);
    groups.value = groupsStore.findAll(from, to);
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
