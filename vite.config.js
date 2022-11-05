import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path'
import postcssNesting from 'postcss-nesting';

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'resources/js'),
            },
            {
                find: "@vue/runtime-core",
                replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
            },
        ],
        dedupe: ['vue']
    },
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        postcssNesting
    ],
});
