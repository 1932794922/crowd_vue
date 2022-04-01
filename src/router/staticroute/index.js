const staticRoutes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/Home.vue'),
        redirect:'/admin/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/user/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/user/Register.vue'),
    },
    {
        path: '/admin/login',
        name: 'AdminLogin',
        component: () => import('@/views/admin/AdminLogin.vue'),
    },
    {
        path: '/admin/main',
        name: 'MainDash',
        component: () => import('@/views/admin/MainDash.vue'),
        children: [{
            path: 'user',
            name: 'User',
            component: () => import('@/views/admin/User.vue'),
        }]
    },
    {
        path: '/projectlist',
        name: 'projectlist',
        component: () => import('@/views/project/ProjectList.vue'),
    },
    {
        path: '/start',
        name: 'start',
        component: () => import('@/views/start/Start.vue'),
    },
    {
        path: '/minecrowdfunding',
        name: 'MineCrowdFunding',
        component: () => import('@/views/user/MineCrowdFunding.vue'),
    },
    {
        path: '/member',
        name: 'Member',
        component: () => import('@/views/user/Member.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/error/404.vue'),
        meta: {
            title: '页面失效啦'
        }
    }]

export default staticRoutes
