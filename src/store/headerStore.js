import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('headerStore', {
    state: () => ({
        title: 'Sport Club Manager',
    }),
    getters: {},
    actions: {
        setTitle(title) {
            this.title = title;
        },
    },
});
