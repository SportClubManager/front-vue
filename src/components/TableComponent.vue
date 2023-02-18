<template>
    <table class="dark">
        <slot></slot>
    </table>
</template>

<script setup>
</script>

<style>
table.dark {
    @apply border-collapse table-fixed w-full text-sm
}

table.dark tbody * {
    @apply bg-zinc-700
}

table.dark th, table td {
    @apply border-b border-slate-600 p-2
}

table.dark th > p:nth-child(n + 2), table td > p:nth-child(n + 2) {
    @apply text-xs text-slate-500
}
</style>