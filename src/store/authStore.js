import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
    }),
    getters: {
        isAuth() {
            return this.user && this.user.id && this.user.email && this.user.token;
        },
    },
    actions: {
        async login(email, password) {
            if (email === 'test@test.com' && password === '123456') {
                // const res = await axios.post('login', { email, password });
                const res = {
                    data: {
                        token: '1qaz2wsx3edc4rfv5tgb6yhn',
                        user: {
                            id: 1,
                            email: email,
                        },
                    },
                };

                this.user = res.data.user;
                this.user.token = res.data.token;
                localStorage.setItem('user', JSON.stringify(res.data.user));
                await router.push({ name: 'home' });
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push({ name: 'login' });
        },
    },
});
