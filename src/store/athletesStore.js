import { ref } from 'vue';
import { defineStore } from 'pinia';
import athletesList from '@/store/dummy/athletes.json';
import g from '@/store/dummy/groups.json';

export const useAthletesStore = defineStore('athleteStore', () => {
    const athletes = ref(athletesList);

    athletes.value.forEach((group, idx) => {
        athletes.value[idx].groups = g.sort(() => Math.random() - Math.random()).slice(0, 5);
    });

    const findAll = (from, to) => {
        if (!from) {
            from = 0;
        }
        if (!to) {
            to = athletes.value.length;
        }

        return athletes.value.slice(from, to);
    };

    const findAllOrderedByGroupId = (from, to, groupId) => {
        if (!from) {
            from = 0;
        }
        if (!to) {
            to = athletes.value.length;
        }

        let result = athletes.value.sort((a, b) => {
            const groupsA = a.groups.filter(g => g.id === Number(groupId));
            const groupsB = b.groups.filter(g => g.id === Number(groupId));

            if (groupsA.length > groupsB.length) {
                return -1;
            }
            if (groupsA.length < groupsB.length) {
                return 1;
            }

            return 0;
        });

        return result.slice(from, to);
    };

    const addGroup = (athleteId, groupId) => {
        const a = athletes.value.find(athlete => athlete.id === Number(athleteId));
        a.groups.push(g.find(group => group.id === Number(groupId)));
    };

    const deleteGroup = (athleteId, groupId) => {
        const a = athletes.value.find(athlete => athlete.id === Number(athleteId));

        const gi = a.groups.findIndex(gr => gr.id === Number(groupId));

        if (gi > -1) {
            a.groups.splice(gi, 1);
        }
    };

    const findById = id => athletes.value.find(athlete => athlete.id === Number(id));
    const add = athlete => {
        athlete.id = athletes.value.slice(-1)[0].id + 1;
        athletes.value.push(athlete);
    };
    const update = athlete => {
        const i = athletes.value.findIndex(oldAthlete => oldAthlete.id === athlete.id);
        athletes.value[i] = athlete;
    };

    const remove = id => {
        const i = athletes.value.findIndex(athlete => athlete.id === Number(id));

        if (i > -1) {
            athletes.value.splice(i, 1);
        }
    };

    return { findAll, findAllOrderedByGroupId, findById, add, update, remove, addGroup, deleteGroup };
});
