<template>
    <table-component>
        <thead>
        <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Color</th>
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
            <td class="pl-8">
                <div class="h-3 w-3" :style="{'background-color': group.color}"></div>
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
    </table-component>
    <pagination-component v-if="totalPages > 1"
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
import TableComponent from '@/components/TableComponent.vue';

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
</style>
