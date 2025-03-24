<template>
    <div
        class="main-section antialiased relative font-kalameh text-sm font-normal"
        :class="[store.sidebar ? 'toggle-sidebar' : '', store.menu, store.layout, store.rtlClass]"
    >
        <component v-bind:is="mainLayout"></component>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    import appLayout from '@/layouts/app-layout.vue';
    import authLayout from '@/layouts/auth-layout.vue';
    import app2Layout from './layouts/app2-layout.vue';
    

    import { useAppStore } from '@/stores/index';
    import { useMeta } from '@/composables/use-meta';
    const objLayout = {
        'auth':authLayout,
        'app2':app2Layout,
        'app': appLayout
    }
    const store = useAppStore();

    useMeta({ title: 'CRM تراز' });

    const mainLayout = computed(() => {
        return objLayout[store.mainLayout];
    });
</script>
