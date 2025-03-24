import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import { useLocalStorage } from '@vueuse/core';
import { encryptData } from '@/plugins/rolepermissioncontrol/encryption';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        loginInfo: useLocalStorage('loginInfo', {
            userId: '',
            token: '',
            profileImage: '',
            companyId: '',
            companyLogo: '',
            iat: 0,
            exp: 0,
            roles: '',
            permissions: '',
            groups: '',
        }),
    }),

    actions: {
        setLoginInfo(token: string = '', permissions = [], groups = []) {
            if (token) {
                const decoded = jwtDecode(token) as any;
                this.loginInfo = {
                    token: decoded.token,
                    iat: decoded.iat,
                    exp: decoded.exp,
                    userId: decoded.userId,
                    profileImage: decoded.profileImage,
                    companyId: decoded.companyId,
                    companyLogo: decoded.companyLogo,
                    roles: encryptData(JSON.stringify(decoded.roles)),
                    permissions: encryptData(JSON.stringify(permissions)),
                    groups: encryptData(JSON.stringify(groups)),
                };
                this.loginInfo['token'] = token;
            }
        },
        removeLoginInfo(token: string = '') {
            if (token == '' || token.length == 0 || token == null) {
                this.loginInfo = {
                    userId: '',
                    token: '',
                    profileImage: '',
                    companyId: '',
                    companyLogo: '',
                    iat: 0,
                    exp: 0,
                    roles: '',
                    permissions: '',
                    groups: '',
                };
            }
        },
    },
    getters: {},
});
