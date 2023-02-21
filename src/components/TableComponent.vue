<template>
    <table class="dark">
        <thead>
        <tr>
            <slot name="thead"></slot>
        </tr>
        </thead>
        <tbody>
        <slot name="tbody"></slot>
        </tbody>
    </table>
</template>

<script setup>
</script>

<style>
table.dark {
    @apply border-collapse w-full text-sm
}

table.dark span {
    @apply text-xs text-slate-500
}

table.dark tbody * {
    @apply bg-zinc-700
}

table.dark th, table td {
    @apply border-b border-slate-600 p-2
}

table.dark tr.active * {
    @apply bg-teal-900
}
</style>