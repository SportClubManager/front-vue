<template>
    <block-table-view :groups="groups" />
    <pagination-component v-if="totalPages > 1"
                          :currentPage="currentPage"
                          :maxVisibleButtons="5"
                          :perPage="perPage"
                          :totalPages="totalPages"
                          @pagechanged="onPageChange"
    />
</template>

<script setup>
import { ref } from 'vue';
import { useGroupsStore } from '@/store/groupsStore';
import PaginationComponent from '@/components/PaginationComponent.vue';
import BlockTableView from '@/views/groups/blocks/TableView.vue';

const groupsStore = useGroupsStore();
const currentPage = ref(1);
const perPage = ref(10);
const totalPages = ref(Math.ceil(groupsStore.findAll().length / perPage.value));
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
