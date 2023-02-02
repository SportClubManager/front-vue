<template>
    <div id="nav-icon" class="button button-primary my-auto !py-2 !pt-2" @click="toggleMenu" :class="{ active: isActive }">
        <div class="flex overflow-hidden items-center justify-center duration-200">
            <div class="flex flex-col justify-between bg-zinc-700 w-5 h-5 duration-300">
                <div class="bg-teal-500 h-[2px] w-7 duration-300 delay-100 origin-left"></div>
                <div class="bg-teal-500 h-[2px] w-8 duration-300 delay-75 rounded"></div>
                <div class="bg-teal-500 h-[2px] w-7 duration-300 origin-left "></div>

                <div class="absolute items-center justify-between duration-500 top-2.5 -translate-x-10 flex w-0">
                    <div class="absolute bg-red-400 h-[2px] w-5 duration-500 rotate-0 delay-300"></div>
                    <div class="absolute bg-red-400 h-[2px] w-5 duration-500 -rotate-0 delay-300"></div>
                </div>
            </div>
        </div>
    </div>
    <ul class="w-full border-t border-teal-600 mt-2.5 pt-2.5 text-right space-y-2.5" v-if="isActive" @click="close">
        <li v-if="authStore.isAuth">
            <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li v-if="authStore.isAuth">
            <router-link :to="{ name: 'groups' }">Groups</router-link>
        </li>
        <li v-if="authStore.isAuth">
            <router-link :to="{ name: 'athletes' }">Athletes</router-link>
        </li>
        <li v-if="!authStore.isAuth">
            <router-link :to="{ name: 'login' }">Log In</router-link>
        </li>
        <li v-if="authStore.isAuth" @click.prevent="authStore.logout()">
            <a>Log Out</a>
        </li>
    </ul>

</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/authStore';

const authStore = useAuthStore();
const isActive = ref(false);

const toggleMenu = () => {
    isActive.value = !isActive.value;
};

const close = () => {
    isActive.value = false;
}
</script>

<style scoped>

* {
    @apply bg-zinc-700;
}

#nav-icon div {
    @apply transform transition-all
}

#nav-icon.active {
    @apply border-red-400
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

ul > li, ul > li > a {
    @apply w-full
}

.router-link-active {
    @apply border-r-2 border-teal-600 text-slate-50 pr-1.5
}
</style>