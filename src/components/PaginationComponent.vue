<template>
    <ul class="flex space-x-2 my-2.5">
        <li>
            <button
                :disabled="isInFirstPage"
                class="button button-primary"
                type="button"
                @click="onClickFirstPage"
            >
                First
            </button>
        </li>
        <!-- Visible Buttons Start -->
        <li v-for="page in pages" :key="page.name">
            <button
                :disabled="page.isDisabled"
                class="button button-primary"
                type="button"
                @click="onClickPage(page.name)"
            >
                {{ page.name }}
            </button>
        </li>
        <!-- Visible Buttons End -->
        <li>
            <button
                :disabled="isInLastPage"
                class="button button-primary"
                type="button"
                @click="onClickLastPage"
            >
                Last
            </button>
        </li>
    </ul>
</template>

<script setup>
import { computed } from 'vue';

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

    for (let i = startPage.value; i < Math.min(startPage.value + props.maxVisibleButtons, startPage.value + props.totalPages); i++) {
        range.push({ name: i, isDisabled: i === props.currentPage });
    }

    return range;
});

const isInFirstPage = computed(() => props.currentPage === 1);
const isInLastPage = computed(() => props.currentPage === props.totalPages);
const onClickPage = page => emit('pagechanged', page);
const onClickFirstPage = () => emit('pagechanged', 1);
const onClickLastPage = () => emit('pagechanged', props.totalPages);
</script>

<style scoped>
</style>