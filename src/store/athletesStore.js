import { defineStore } from 'pinia';
import athletes from '@/store/dummy/athletes.json';

export const useAthletesStore = defineStore('athleteStore', {
    state: () => ({
        athletes,
    }),
    getters: {
        findAll: state => (from, to) => state.athletes.slice(from, to),
        findById: state => id => state.athletes.find(athlete => athlete.id === Number(id)),
    },
    actions: {
        add: athlete => {
            athlete.id = athletes.slice(-1)[0].id + 1;
            athletes.push(athlete);
        },

        update: athlete => {
            const i = athletes.findIndex(oldAthlete => oldAthlete.id === athlete.id);
            athletes[i] = athlete;
        },

        delete: id => {
            const i = athletes.findIndex(athlete => athlete.id === Number(id));

            if (i > -1) {
                athletes.splice(i, 1);
            }
        }
    },
});
