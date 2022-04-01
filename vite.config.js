import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

import {resolve} from "path" // 主要用于alias文件路径别名

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver()

            ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver()
            ],
        }),
    ],
    // 文件夹别名 @ 为src目录
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    server: {
        hostname: '0.0.0.0', // 默认是 localhost
        port: '8000', // 默认是 3000 端口
        // open: true, // 浏览器自动打开
        https: false, // 是否开启 https
        ssr: false, // 服务端渲染
        proxy: {
            '/api': {
                target: 'http://localhost:8080/crowd', // 本地多服务
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
        }
    },

})