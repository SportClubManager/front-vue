import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHeaderStore = defineStore('headerStore', () => {
    const title = ref('Sport Club Manager');
    const toObject = ref(null);
    const setTitle = t => title.value = t;
    const setToObject = o => toObject.value = o;

    return { title, toObject, setTitle, setToObject };
});
