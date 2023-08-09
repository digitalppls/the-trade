import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'my-accounts',
                    meta: {
                        breadcrumb: ['Dashboard', 'My accounts']
                    },
                    component: () => import('@/views/dashboards/MyAccounts.vue')
                }
            ]
        },
        {
            path: '/:catchAll(.*)*',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/pages/auth/Register.vue')
        },
        {
            path: '/auth/forgotpassword',
            name: 'forgotpassword',
            component: () => import('@/views/pages/auth/ForgotPassword.vue')
        },
        {
            path: '/auth/newpassword',
            name: 'newpassword',
            component: () => import('@/views/pages/auth/NewPassword.vue')
        },
        {
            path: '/auth/verification',
            name: 'verification',
            component: () => import('@/views/pages/auth/Verification.vue')
        },
        {
            path: '/auth/lockscreen',
            name: 'lockscreen',
            component: () => import('@/views/pages/auth/LockScreen.vue')
        }
    ]
})

export default router
