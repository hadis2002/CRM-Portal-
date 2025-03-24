import { decryptData } from './encryption';
import Forbidden from './Forbidden.vue';

const ROLES_SCORE = {
    ADMIN: 100,
    COMPANY_MANAGER: 80,
    BRANCH_MANAGER: 60,
    DIRECTORATE: 40,
    STAFF: 20,
    CUSTOMER: 10,
};
const rolePermissionForbidden = 'role-permission-forbidden';

const beforeEachRouter = (to, from, next) => {
    let hasPermission = true;
    let hasRole = true;

    if (to?.meta?.permissions && to?.meta?.permissions?.length) {
        hasPermission = checkPermissions(to?.meta?.permissions);
    }

    if (to?.meta?.role && to?.meta?.role != '') {
        hasRole = checkRoles(to?.meta?.role);
    }
    
    if (hasRole || hasPermission) {
        next();
    }
    next(`/${rolePermissionForbidden}`);
};

const generateForbiddenRoute = () => {
    return { path: `/${rolePermissionForbidden}`, component: Forbidden, name: rolePermissionForbidden };
};

const getUserPermissions = () => {
    let loginInfo = localStorage.getItem('loginInfo') ? JSON.parse(localStorage.getItem('loginInfo')) : {};
    let permissions = loginInfo['permissions'];
    permissions = permissions ? decryptData(permissions) : '';
    return permissions ? JSON.parse(permissions) || [] : [];
};

const getUserRoles = () => {
    let loginInfo = localStorage.getItem('loginInfo') ? JSON.parse(localStorage.getItem('loginInfo')) : {};
    let roles = loginInfo['roles'];
    roles = roles ? decryptData(roles) : '';
    return roles ? JSON.parse(roles) || [] : [];
};

const checkPermissions = (requiredPermissions) => {
    const userPermissions = getUserPermissions();
    return requiredPermissions.every((perm) => userPermissions.includes(perm));
};

const checkRoles = (requiredRole) => {
    const userRoles = getUserRoles();
    return userRoles.some((role) => {
        return ROLES_SCORE[role] >= ROLES_SCORE[requiredRole];
    });
};

const checkMultiRoles = (requiredRoles = []) => {
    const userRoles = getUserRoles();
    let hasAccess = false;
    hasAccess = requiredRoles.some((requiredRole) => {
        const finded = userRoles.find((userRole) => {
            return ROLES_SCORE[userRole] >= ROLES_SCORE[requiredRole];
        });
        return finded;
    });
    return hasAccess;
};

export { checkPermissions, checkRoles, generateForbiddenRoute, beforeEachRouter, checkMultiRoles, getUserPermissions, getUserRoles };
