<template>
    <div id="nav-icon" @click="toggleMenu" :class="{ active: isActive }">
        <div class="flex overflow-hidden items-center justify-center transform transition-all duration-200">
            <div class="flex flex-col bg-zinc-700 justify-between w-5 h-5 transform transition-all duration-300">
                <div class="bg-teal-500 h-[2px] w-7 transform transition-all duration-300 origin-left delay-100"></div>
                <div class="bg-teal-500 h-[2px] w-8 rounded transform transition-all duration-300 delay-75"></div>
                <div class="bg-teal-500 h-[2px] w-7 transform transition-all duration-300 origin-left "></div>

                <div
                    class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0">
                    <div
                        class="absolute bg-red-400 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300"></div>
                    <div
                        class="absolute bg-red-400 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300"></div>
                </div>
            </div>
        </div>
    </div>

    <ul class="w-full border-t border-teal-600 mt-2.5 pt-2.5 text-right space-y-2.5" v-if="isActive">
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Sign in</a></li>
    </ul>

</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);
const toggleMenu = () => {
    isActive.value = !isActive.value;
};
</script>

<style scoped>

* {
    @apply bg-zinc-700;
}

#nav-icon.active > div > div > div:nth-child(-n+3) {
    @apply translate-y-6
}

#nav-icon.active > div > div > div:nth-child(4) {
    @apply translate-x-0 w-12
}

#nav-icon.active > div > div > div:nth-child(4) > div:nth-child(1) {
    @apply rotate-45
}

#nav-icon.active > div > div > div:nth-child(4) > div:nth-child(2) {
    @apply -rotate-45
}
</style>