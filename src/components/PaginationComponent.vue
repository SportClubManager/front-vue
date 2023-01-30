<template>
    <ul class="flex space-x-2 mt-2.5">
        <li>
            <button
                type="button"
                @click="onClickFirstPage"
                :disabled="isInFirstPage"
            >
                First
            </button>
        </li>
        <li>
            <button
                type="button"
                @click="onClickPreviousPage"
                :disabled="isInFirstPage"
            >
                Prev
            </button>
        </li>
        <!-- Visible Buttons Start -->
        <li v-for="page in pages" :key="page.name">
            <button
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
                type="button"
                @click="onClickNextPage"
                :disabled="isInLastPage"
            >
                Next
            </button>
        </li>
        <li>
            <button
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
    // When on the first page
    if (props.currentPage === 1) {
        return 1;
    }

    // When on the last page
    if (props.currentPage === props.totalPages) {
        return props.totalPages - props.maxVisibleButtons + 1;
    }

    // When inbetween
    return props.currentPage - 1;
});

const pages = computed(() => {
    const range = [];

    for (let i = startPage.value; i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages); i++) {
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
const onClickPreviousPage = () => {
    emit('pagechanged', props.currentPage - 1);
};
const onClickPage = (page) => {
    emit('pagechanged', page);
};
const onClickNextPage = () => {
    emit('pagechanged', props.currentPage + 1);
};
const onClickLastPage = () => {
    emit('pagechanged', props.totalPages);
};
</script>

<style scoped>
button {
    @apply border border-teal-500 px-2.5 py-1 rounded
}

button:disabled {
    @apply bg-teal-800
}
</style>