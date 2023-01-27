import { defineStore } from 'pinia';
import athletes from '@/store/dummy/athletes.json';

export const useAthletesStore = defineStore('athleteStore', {
    state: () => ({
        athletes,
    }),
    getters: {},
    actions: {},
});
