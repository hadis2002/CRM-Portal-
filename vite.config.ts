import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
    base: '/main/',
    plugins: [
        vue(),
        vueI18n({
            include: path.resolve(__dirname, './src/locales/**'),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        mainFields: [
            'browser',
            'module',
            'main',
            'jsnext:main',
            'jsnext'
        ]
    },
    optimizeDeps: {
        include: ['quill'],
    },
    server: {
        host: '0.0.0.0',
        port: 5173
    },
    mode:process.env.MODE

});
