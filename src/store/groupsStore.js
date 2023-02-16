import { defineStore } from 'pinia';
import groups from '@/store/dummy/groups.json';

export const useGroupsStore = defineStore('groupsStore', {
    state: () => ({
        groups,
    }),
    getters: {
        findAll: state => (from, to) => {
            if (!from) {
                from = 0;
            }
            if (!to) {
                to = state.groups.length;
            }

            return state.groups.slice(from, to);
        },
        findById: state => id => state.groups.find(group => group.id === Number(id)),
    },
    actions: {
        add: group => {
            group.id = groups.slice(-1)[0].id + 1;
            groups.push(group);
        },

        update: group => {
            const i = groups.findIndex(oldGroup => oldGroup.id === group.id);
            groups[i] = group;
        },

        delete: id => {
            const i = groups.findIndex(group => group.id === Number(id));

            if (i > -1) {
                groups.splice(i, 1);
            }
        },
    },
});
