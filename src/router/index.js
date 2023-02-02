import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/store/authStore';
import { useHeaderStore } from '@/store/headerStore';

const guard = (to, from, next) => {
    const authStore = useAuthStore();

    if (to.name === 'login') {
        next();
        return;
    }

    if (authStore.isAuth) {
        next();
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
            path: '/groups',
            name: 'groups',
            component: () => import('@/views/groups/ListView.vue'),
            meta: {
                title: 'Groups List',
            },
        },
        {
            path: '/groups/add',
            name: 'addGroup',
            component: () => import('@/views/groups/AddView.vue'),
            meta: {
                title: 'Add Group',
            },
        },
        {
            path: '/groups/:id',
            name: 'groupDetails',
            component: () => import('@/views/groups/DetailsView.vue'),
            props: true,
            meta: {
                title: 'Group Details',
            },
        },
        {
            path: '/groups/edit/:id',
            name: 'groupUpdate',
            component: () => import('@/views/groups/UpdateView.vue'),
            props: true,
            meta: {
                title: 'Edit Group',
            },
        },
        {
            path: '/athletes',
            name: 'athletes',
            component: () => import('@/views/athletes/ListView.vue'),
            meta: {
                title: 'Athletes List',
            },
        },
        {
            path: '/athletes/:id',
            name: 'athleteDetails',
            component: () => import('@/views/athletes/DetailsView.vue'),
            props: true,
            meta: {
                title: 'Athlete Details',
            },
        },
        {
            path: '/athletes/add',
            name: 'addAthlete',
            component: () => import('@/views/athletes/AddView.vue'),
            meta: {
                title: 'Add Athlete',
            },
        },
        {
            path: '/athletes/edit/:id',
            name: 'athleteUpdate',
            component: () => import('@/views/athletes/UpdateView.vue'),
            props: true,
            meta: {
                title: 'Edit Athlete',
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
