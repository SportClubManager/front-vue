import { defineStore } from 'pinia';
import groupsList from '@/store/dummy/groups.json';
import { ref } from 'vue';

export const useGroupsStore = defineStore('groupsStore', () => {
    const groups = ref(groupsList);

    const findAll = (from, to) => {
        if (!from) {
            from = 0;
        }
        if (!to) {
            to = groups.value.length;
        }

        return groups.value.slice(from, to);
    };

    const findById = id => groups.value.find(group => group.id === Number(id));

    const add = group => {
        group.id = groups.value.slice(-1)[0].id + 1;
        groups.value.push(group);
    };

    const update = group => {
        const i = groups.value.findIndex(oldGroup => oldGroup.id === group.id);
        groups.value[i] = group;
    };

    const deleteGroup = id => {
        const i = groups.value.findIndex(group => group.id === Number(id));

        if (i > -1) {
            groups.value.splice(i, 1);
        }
    };

    const deleteEvent = id => {
        groups.value.forEach((group, idx) => {
            const i = group.events.findIndex(event => event.id === Number(id));

            if (i > -1) {
                groups.value[idx].events.splice(i, 1);
            }
        });
    };

    const addEvent = (groupId, event) => {
        const i = groups.value.findIndex(group => group.id === Number(groupId));

        if (i > -1) {
            event.id = Number(groupId + groups.value[i].events.length);
            groups.value[i].events.unshift(event);
        }
    };

    return { groups, findAll, findById, add, update, deleteGroup, deleteEvent, addEvent };
});
