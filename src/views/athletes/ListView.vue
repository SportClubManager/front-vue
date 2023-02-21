<template>
    <block-table-view :athletes="athletes">
        <template #head>
            <th class="text-right">
                <router-link :to="{name: 'addAthlete'}" class="button button-primary">+ add</router-link>
            </th>
        </template>
        <template #body>
            <td class="text-right"><a class="button button-info" href="#">charge</a></td>
        </template>
    </block-table-view>
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
import { useAthletesStore } from '@/store/athletesStore';
import BlockTableView from '@/views/athletes/blocks/TableView.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const athletesStore = useAthletesStore();
const currentPage = ref(1);
const perPage = ref(10);
const totalPages = ref(Math.ceil(athletesStore.findAll(null, null).length / perPage.value));
const athletes = ref(athletesStore.findAll(0, perPage.value));

const onPageChange = (page) => {
    currentPage.value = page;
    let from = Math.imul(perPage.value, page) - perPage.value;
    let to = Math.imul(perPage.value, page);
    athletes.value = athletesStore.findAll(from, to);
};
</script>

<style scoped>
</style>
