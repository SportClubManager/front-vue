import { ref } from 'vue';
import { defineStore } from 'pinia';
import groupsList from '@/store/dummy/groups.json';
import a from '@/store/dummy/athletes.json';

export const useGroupsStore = defineStore('groupsStore', () => {
    const groups = ref(groupsList);

    groups.value.forEach((group, idx) => {
        groups.value[idx].athletes = a.sort(() => Math.random() - Math.random()).slice(0, Math.floor(Math.random() * 10) + 4);
    });

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

    const findByIds = ids => groups.value.find(group => ids.includes(group.id));

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
            const i = group.schedule.findIndex(event => event.id === Number(id));

            if (i > -1) {
                groups.value[idx].schedule.splice(i, 1);
            }
        });
    };

    const addEvent = (groupId, event) => {
        const i = groups.value.findIndex(group => group.id === Number(groupId));

        if (i > -1) {
            event.id = Number(groupId + groups.value[i].schedule.length);
            groups.value[i].schedule.unshift(event);
        }
    };

    return { findAll, findById, findByIds, add, update, deleteGroup, deleteEvent, addEvent };
});
