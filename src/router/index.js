import { createRouter, createWebHashHistory } from 'vue-router'

import staticRoutes from './staticroute'

const routes = [...staticRoutes]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savePosition) {
        if (savePosition) {
            //主页刷新保证回到顶部
            if (to.path === '/' && from.path === '/') {
                savePosition.top = 0
            }
            //解决页面从列表页跳转到详情页返回,初始在原来位置
            return savePosition
        } else {
            //解决页面跳转后页面高度和前一个页面高度一样
            return {
                top: 0,
                left: 0
            }
        }
    }
})

export default router