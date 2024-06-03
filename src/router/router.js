import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'main', component: () => import('@/pages/MainPage.vue') },
    { path: '/auth', name: 'auth', component: () => import('@/pages/Authorization.vue') },
    { path: '/test', name: 'test', component: () => import('@/pages/Test.vue') },
    { path: '/progress', name: 'progress', component: () => import('@/pages/InProgress.vue') },
    { path: '/about', name: 'about', component: () => import('@/pages/InProgress.vue') },
    { path: '/support', name: 'support', component: () => import('@/pages/InProgress.vue') },
    { path: '/confidential', name: 'confidential', component: () => import('@/pages/InProgress.vue') },
    { path: '/rules', name: 'rules', component: () => import('@/pages/InProgress.vue') },
    { path: '/order', name: 'order', component: () => import('@/pages/Order.vue') },
    { path: '/current', name: 'current', component: () => import('@/pages/Current.vue') },
    { path: '/allorders', name: 'allorders', component: () => import('@/pages/AllOrders.vue') },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
