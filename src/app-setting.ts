import { $themeConfig } from '../theme.config';
import { useAppStore } from '@/stores/index';
import { useAuthStore } from '@/stores/authentication';

export default {
    init() {
        const store = useAppStore();
        const authStore = useAuthStore();

        let val: any = localStorage.getItem('theme');
        val = $themeConfig.theme;
        store.toggleTheme(val);

        val = localStorage.getItem('menu');
        val = $themeConfig.menu;
        store.toggleMenu(val);

        val = localStorage.getItem('layout');
        val = $themeConfig.layout;
        store.toggleLayout(val);

        val = localStorage.getItem('i18n_locale');

        val = $themeConfig.locale;

        const list = store.languageList;
        const item = list.find((item: any) => item.code === val);
        if (item) {
            this.toggleLanguage(item);
        }

        val = localStorage.getItem('rtlClass');
        
        val = $themeConfig.rtlClass;
        store.toggleRTL(val);

        val = localStorage.getItem('animation');
        val = val || $themeConfig.animation;
        store.toggleAnimation(val);

        val = localStorage.getItem('navbar');
        val = val || $themeConfig.navbar;
        store.toggleNavbar(val);

        val = localStorage.getItem('semidark');
        val = val === 'true' ? true : $themeConfig.semidark;
        store.toggleSemidark(val);

        val = JSON.parse(localStorage.getItem('loginInfo') || '')
    },

    toggleLanguage(item: any) {
        const store = useAppStore();

        let lang: any = null;
        if (item) {
            lang = item;
        } else {
            let code = store.locale || null;
            if (!code) {
                code = localStorage.getItem('i18n_locale');
            }

            item = store.languageList.find((d: any) => d.code === code);
            if (item) {
                lang = item;
            }
        }

        if (!lang) {
            lang = store.languageList.find((d: any) => d.code === 'ir');
        }

        store.toggleLocale(lang.code);
        return lang;
    },

    changeAnimation(type = 'add') {
        const store = useAppStore();
        if (store.animation) {
            const eleanimation: any = document.querySelector('.animation');
            if (type === 'add') {
                eleanimation?.classList.add('animate__animated');
                eleanimation?.classList.add(store.animation);
            } else {
                eleanimation?.classList.remove('animate__animated');
                eleanimation?.classList.remove(store.animation);
            }
        }
    },
};
