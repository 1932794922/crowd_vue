/*
 * @Description:
 * @Author: August_xiao
 * @Date: 2022-03-31 09:57:13
 * @LastEditors: August_xiao
 * @LastEditTime: 2022-08-27 22:18:21
 * @FilePath: /crowd_vue/vite.config.js
 * QQ: 1932794922
 * email: 1932794922@qq.com
 * Copyright (c) 2022 by August_xiao, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { resolve } from 'path' // 主要用于alias文件路径别名

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  // 文件夹别名 @ 为src目录
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    hostname: '0.0.0.0', // 默认是 localhost
    port: '8001', // 默认是 3000 端口
    // open: true, // 浏览器自动打开
    https: false, // 是否开启 https
    ssr: false, // 服务端渲染
    proxy: {
      '^/api/member|payorder|project|order': {
        // target: 'http://localhost:8080/crowd', // 本地多服务
        target: 'http://192.168.10.100:80', // 本地多服务
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '^/api/((?!member).)*': {
        target: 'http://192.168.10.100:8080/admin-webui', // 本地多服务
        // target: 'http://localhost:80', // 本地多服务
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
