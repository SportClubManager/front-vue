import { defineStore } from 'pinia';
import athletes from '@/store/dummy/athletes.json';

export const useAthletesStore = defineStore('athleteStore', {
    state: () => ({
        athletes,
    }),
    getters: {
        get: (state) => {
            return (from, to) => {
                return state.athletes.slice(from, to);
            };
        },
    },
    actions: {},
});
