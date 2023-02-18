<template>
    <div class="fixed !m-0 top-0 bottom-0 left-0 right-0 bg-zinc-700 bg-opacity-70 flex justify-center items-center"
         @click.self="close">
        <div class="bg-zinc-800 border border-teal-700 shadow-xl shadow-teal-700 p-2">
            <header class="flex justify-between text-teal-500">
                <slot name="header">
                    This is the default title!
                </slot>
                <button class="text-red-500" @click="close">x</button>
            </header>

            <section class="relative p-1">
                <slot name="body">
                    This is the default body!
                </slot>
            </section>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['close']);

const close = () => emit('close');
</script>

<style scoped>
</style>