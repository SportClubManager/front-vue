import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/store/authStore';
import { useHeaderStore } from '@/store/headerStore';

const guard = (to, from, next) => {
    const authStore = useAuthStore();

    if (authStore.isAuth) {
        if (to.name === 'login') {
            next({ name: 'home' });
        } else {
            next();
        }
    } else {
        next({ name: 'login' });
    }
};

const title = (to) => {
    const headerStorage = useHeaderStore();
    headerStorage.setTitle(to.meta.title ? to.meta.title : 'Spot Club Manager');
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Home',
            },
        },
        {
            path: '/athletes',
            name: 'athletes',
            component: () => import('@/views/athletes/AthletesView.vue'),
            meta: {
                title: 'Athletes',
            },
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue'),
        },
    ],
});

router.beforeEach((to, from, next) => {
    title(to);
    guard(to, from, next);
});

export default router;
