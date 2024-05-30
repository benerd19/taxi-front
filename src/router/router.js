import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'main', component: () => import('@/pages/MainPage.vue') },
    { path: '/auth', name: 'auth', component: () => import('@/pages/Authorization.vue') },
    { path: '/test', name: 'test', component: () => import('@/pages/Test.vue') },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
