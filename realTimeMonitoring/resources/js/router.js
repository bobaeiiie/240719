import { createWebHistory, createRouter } from 'vue-router';
import AppComponent from '../components/AppComponent.vue';

const routes = [
    {
        path: "/",
        redirect: "/main",
    },
    {
        path: "/main",
        component: AppComponent,
    },
];


// Vue Router 생성
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 스크롤 위치를 최상단으로 설정
        return { top: 0 };
    }
});

export default router;