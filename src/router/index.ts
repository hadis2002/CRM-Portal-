import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';
import { useAuthStore } from '@/stores/authentication';
import { jwtDecode } from 'jwt-decode';
import { generateForbiddenRoute, beforeEachRouter } from '@/plugins/rolepermissioncontrol/helperAccess';

const routes: RouteRecordRaw[] = [
    {
        path: '/companies/index',
        name: 'companies-index',
        component: () => import('../views/portal/companies/index.vue'),
        meta: { layout: 'app2', role: 'COMPANY_MANAGER', permissions: [''] },
    },
    {
        path: '/companies/edit/:Id',
        name: 'companies-edit',
        component: () => import('../views/portal/companies/edit.vue'),
        meta: { layout: 'app2', role: 'COMPANY_MANAGER' },
    },
    {
        path: '/companies/add',
        name: 'companies-add',
        component: () => import('../views/portal/companies/add.vue'),
        meta: { layout: 'app2', role: 'ADMIN', permissions: [''] },
    },
    {
        path: '/branches/index',
        name: 'branches-index',
        component: () => import('../views/portal/branches/index.vue'),
        meta: { layout: 'app2', role: 'BRANCH_MANAGER', permissions: ['show-branch'] },
    },
    {
        path: '/branches/edit/:Id',
        name: 'branches-edit',
        component: () => import('../views/portal/branches/edit.vue'),
        meta: { layout: 'app2', role: 'BRANCH_MANAGER', permissions: ['edit-branch'] },
    },
    {
        path: '/branches/add',
        name: 'branches-add',
        component: () => import('../views/portal/branches/add.vue'),
        meta: { layout: 'app2', role: 'COMPANY_MANAGER', permissions: ['create-branch'] },
    },
    {
        path: '/personnel/index',
        name: 'personnel-index',
        component: () => import('../views/portal/personnel/index.vue'),
        meta: { layout: 'app2', role: 'BRANCH_MANAGER', permissions: ['show-user'] },
    },
    {
        path: '/personnel/edit/:Id',
        name: 'personnel-edit',
        component: () => import('../views/portal/personnel/edit.vue'),
        meta: { layout: 'app2', role: 'BRANCH_MANAGER', permissions: ['edit-user'] },
    },
    {
        path: '/personnel/add',
        name: 'personnel-add',
        component: () => import('../views/portal/personnel/add.vue'),
        meta: { layout: 'app2', role: 'BRANCH_MANAGER', permissions: ['create-user'] },
    },
    {
        path: '/groups/index',
        name: 'groups-index',
        component: () => import('../views/portal/groups/index.vue'),
        meta: { layout: 'app2', role: 'BRANCH_MANAGER', permissions: ['show-group'] },
    },
    {
        path: '/groups/add',
        name: 'groups-add',
        component: () => import('../views/portal/groups/add.vue'),
        meta: { layout: 'app2', role: 'BRANCH_MANAGER', permissions: ['create-group'] },
    },
    {
        path: '/groups/edit/:Id',
        name: 'groups-edit',
        component: () => import('../views/portal/groups/add.vue'),
        meta: { layout: 'app2', role: 'BRANCH_MANAGER', permissions: ['edit-group'] },
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/portal/profile.vue'),
        meta: { layout: 'app2' },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/portal/login.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/parametricFields',
        name: 'parametricFields',
        component: () => import ('../views/portal/parametricFields.vue'),
        meta: { layout: 'app2'}
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/portal/NotFound.vue'),
        meta: { layout: 'app2' },
    },
    generateForbiddenRoute(),
];

const router = createRouter({
    history: createWebHistory('/main'),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

const isLoggedin = () => {
    const authStore = useAuthStore();
    const token = authStore?.loginInfo?.token || '';
    if (token.length == 0 || token === '' || tokenValidation() == false) {
        return false;
    } else {
        return true;
    }
};

const tokenValidation = () => {
    const authStore = useAuthStore();
    const loginInfo = localStorage.getItem('loginInfo') ? JSON.parse(localStorage.getItem('loginInfo') || '') : {};
    let token = loginInfo?.token || authStore.loginInfo?.token;
    const decoded = jwtDecode(token) as any;
    if (decoded['userId'] != loginInfo.userId) {
        return false;
    }
    if (decoded.exp * 1000 < new Date().getTime()) {
        authStore.removeLoginInfo();
        return false;
    }
    return true;
};

router.beforeEach((to, from, next) => {
    if(to.path === '/' && isLoggedin()) {
        window.location.href = import.meta.env.VITE_CRM_URL
    }
    const store = useAppStore();
    const publicRoutes = ['login'];
    store.setMainLayout(to.meta?.layout || 'app');
    if (publicRoutes.includes((to.name ?? '') as string)) {
        next();
    }
    if (!isLoggedin()) {
        return next({ name: 'login' });
    }
    beforeEachRouter(to, from, next);
    next();
});

router.afterEach((to, from, next) => {
    appSetting.changeAnimation();
});
export default router;
