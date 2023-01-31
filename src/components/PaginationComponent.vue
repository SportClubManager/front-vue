<template>
    <ul class="flex space-x-2 mt-2.5">
        <li>
            <button
                class="button button-primary"
                type="button"
                @click="onClickFirstPage"
                :disabled="isInFirstPage"
            >
                First
            </button>
        </li>
        <!-- Visible Buttons Start -->
        <li v-for="page in pages" :key="page.name">
            <button
                class="button button-primary"
                type="button"
                @click="onClickPage(page.name)"
                :disabled="page.isDisabled"
            >
                {{ page.name }}
            </button>
        </li>
        <!-- Visible Buttons End -->
        <li>
            <button
                class="button button-primary"
                type="button"
                @click="onClickLastPage"
                :disabled="isInLastPage"
            >
                Last
            </button>
        </li>
    </ul>
</template>

<script setup>
import { computed, defineEmits } from 'vue';

const props = defineProps({
    maxVisibleButtons: { type: Number, required: false, default: 3 },
    totalPages: { type: Number, required: true },
    perPage: { type: Number, required: true },
    currentPage: { type: Number, required: true },
});

const emit = defineEmits(['pagechanged']);

const startPage = computed(() => {
    let sp = props.currentPage - Math.floor(props.perPage / 2);

    if (sp < 1) {
        return 1;
    }

    if (sp > props.totalPages - props.maxVisibleButtons) {
        return props.totalPages - props.maxVisibleButtons + 1;
    }

    if (sp > props.totalPages) {
        return props.totalPages;
    }

    return sp;
});

const pages = computed(() => {
    const range = [];

    for (let i = startPage.value; i < startPage.value + props.maxVisibleButtons; i++) {
        range.push({ name: i, isDisabled: i === props.currentPage });
    }

    return range;
});

const isInFirstPage = computed(() => {
    return props.currentPage === 1;
});

const isInLastPage = computed(() => {
    return props.currentPage === props.totalPages;
});

const onClickFirstPage = () => {
    emit('pagechanged', 1);
};
const onClickPage = (page) => {
    emit('pagechanged', page);
};
const onClickLastPage = () => {
    emit('pagechanged', props.totalPages);
};
</script>

<style scoped>
</style>