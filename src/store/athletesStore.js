import { defineStore } from 'pinia';
import athletes from '@/store/dummy/athletes.json';

export const useAthletesStore = defineStore('athleteStore', {
    state: () => ({
        athletes,
    }),
    getters: {
        findAll: (state) => {
            return (from, to) => {
                return state.athletes.slice(from, to);
            };
        },
        findById: state => id => state.athletes.find(athlete => athlete.id === Number(id)),
    },
    actions: {
        add: (athlete) => {
            athlete.id = athletes.slice(-1) + 1;
            athletes.push(athlete);
        },

        delete: (id) => {
            const i = athletes.findIndex((athlete) => athlete.id === Number(id));

            if (i > -1) {
                athletes.splice(i, 1);
            }
        }
    },
});
