<template>
    <athletes-table-view :athletes="athletes">
        <template #head>
            <th>actions</th>
        </template>
        <template #body="slotProps">
            <td class="text-right">
                <button v-if="hasGroup(slotProps.athlete, props.groupId)"
                        class="button button-danger"
                        @click="athletesStore.deleteGroup(slotProps.athlete.id, props.groupId)"
                >
                    - expel
                </button>
                <button v-else
                        class="button button-primary"
                        @click="athletesStore.addGroup(slotProps.athlete.id, props.groupId)"
                >
                    + add
                </button>
            </td>
        </template>
    </athletes-table-view>
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
import { useGroupsStore } from '@/store/groupsStore';
import { useHeaderStore } from '@/store/headerStore';
import PaginationComponent from '@/components/PaginationComponent.vue';
import AthletesTableView from '@/views/athletes/blocks/TableView.vue';

const props = defineProps(['groupId']);
const athletesStore = useAthletesStore();
const groupsStore = useGroupsStore();
const headerStore = useHeaderStore();

const group = groupsStore.findById(props.groupId);
const currentPage = ref(1);
const perPage = ref(10);
const totalPages = ref(Math.ceil(athletesStore.findAll(null, null).length / perPage.value));
const athletes = ref(athletesStore.findAllOrderedByGroupId(0, perPage.value, props.groupId));

headerStore.setToObject({ name: 'groupDetails', title: 'Group ' + group.name, params: { id: Number(props.groupId) } });
const hasGroup = (athlete, groupId) => {
    return athlete.groups.filter(g => g.id === Number(groupId)).length;
};

const onPageChange = (page) => {
    currentPage.value = page;
    let from = Math.imul(perPage.value, page) - perPage.value;
    let to = Math.imul(perPage.value, page);
    athletes.value = athletesStore.findAll(from, to);
};
</script>

<style scoped>
</style>