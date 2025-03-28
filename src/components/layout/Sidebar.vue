<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
            <div class="bg-white dark:bg-[#0e1726] h-full">
                <div class="flex justify-between items-center px-4 py-3 border-b-2 border-white-light/40">
                    <router-link to="/" class="main-logo flex items-center shrink-0">
                        <span class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">تراز سامانه</span>
                    </router-link>
                    <a
                        href="javascript:;"
                        class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-primary"
                        @click="store.toggleSidebar()"
                    >
                        <icon-carets-down class="m-auto rotate-90" />
                    </a>
                </div>
                <perfect-scrollbar
                    :options="{
                        swipeEasing: true,
                        wheelPropagation: false,
                    }"
                    class="h-[calc(100vh-80px)] relative"
                >
                    <ul class="relative font-semibold space-y-0.5 p-4 py-0">
                        <li class="menu nav-item">
                            <button
                                type="button"
                                class="nav-link group w-full"
                                :class="{ active: activeDropdown === 'base_information' }"
                                @click="activeDropdown === 'base_information' ? (activeDropdown = null) : (activeDropdown = 'base_information')"
                            >
                                <div class="flex items-center">
                                    <icon-menu-dashboard class="group-hover:!text-primary shrink-0" />
                                    <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                        {{ $t('base_information') }}
                                    </span>
                                </div>
                                <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'base_information' }">
                                    <icon-caret-down />
                                </div>
                            </button>
                            <vue-collapsible :isOpen="activeDropdown === 'base_information'">
                                <ul class="sub-menu text-gray-500">
                                    <li>
                                        <router-link to="/base-info/organization" @click="toggleMobileMenu">{{ $t('organization_info') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/base-info/users" @click="toggleMobileMenu">{{ $t('users') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/base-info/departments" @click="toggleMobileMenu">{{ $t('departments') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/base-info/categories" @click="toggleMobileMenu">{{ $t('categories') }}</router-link>
                                    </li>
                                </ul>
                            </vue-collapsible>
                        </li>

                        <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                            <icon-minus class="w-4 h-5 flex-none hidden" />
                            <span>{{ $t('form_builder') }}</span>
                        </h2>

                        <li class="menu nav-item">
                            <button
                                type="button"
                                class="nav-link group w-full"
                                :class="{ active: activeDropdown === 'forms' }"
                                @click="activeDropdown === 'forms' ? (activeDropdown = null) : (activeDropdown = 'forms')"
                            >
                                <div class="flex items-center">
                                    <icon-menu-forms class="group-hover:!text-primary shrink-0" />

                                    <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t('forms') }}</span>
                                </div>
                                <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'forms' }">
                                    <icon-caret-down />
                                </div>
                            </button>
                            <vue-collapsible :isOpen="activeDropdown === 'forms'">
                                <ul class="sub-menu text-gray-500">
                                    <li>
                                        <router-link to="/forms/formbuilder" @click="toggleMobileMenu">{{ $t('create_new_form') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/forms/formlistall" @click="toggleMobileMenu">{{ $t('all_forms') }}</router-link>
                                    </li>                                                                       
                                </ul>
                            </vue-collapsible>
                        </li>
                    </ul>
                </perfect-scrollbar>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { useAppStore } from '@/stores/index';
    import VueCollapsible from 'vue-height-collapsible/vue3';
    import IconCaretsDown from '@/components/icon/icon-carets-down.vue';
    import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard.vue';
    import IconMinus from '@/components/icon/icon-minus.vue';
    import IconCaretDown from '@/components/icon/icon-caret-down.vue';
    import IconMenuForms from '@/components/icon/menu/icon-menu-forms.vue';

    const store = useAppStore();
    const activeDropdown: any = ref('');

    onMounted(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 1024) {
            store.toggleSidebar();
        }
    };
</script>
