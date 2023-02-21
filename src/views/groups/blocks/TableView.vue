<template>
    <table-component>
        <template #thead>
            <th class="text-center">Name</th>
            <th class="text-center">Color</th>
            <th class="text-center">Athletes</th>
            <th v-if="actions" class="text-right">
                <router-link :to="{name: 'addGroup'}" class="button button-primary">+ add</router-link>
            </th>
        </template>
        <template #tbody>
            <tr v-for="group in groups" :key="group.id">
                <td class="pl-8">
                    <router-link :to="{name: 'groupDetails', params: {id: group.id}}">{{ group.name }}</router-link>
                </td>
                <td class="text-center">
                    <div :style="{'background-color': group.color}" class="mx-auto h-3 w-3"></div>
                </td>
                <td class="text-center">
                    <router-link :to="{name: 'groupAthletes', params: {groupId: group.id}}" class="button button-info">
                        {{ group.athletes.length }}
                    </router-link>
                </td>
                <td v-if="actions" class="text-right">
                    <router-link :to="{name: 'groupDetails', params: {id: group.id}}" class="button button-info">
                        view
                    </router-link>
                </td>
            </tr>
        </template>
    </table-component>
</template>

<script setup>
import TableComponent from '@/components/TableComponent.vue';

defineProps({
    groups: { type: Array, required: true },
    actions: { type: Boolean, required: false, default: true },
});
</script>

<style scoped>

</style>