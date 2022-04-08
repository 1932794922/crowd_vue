const staticRoutes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/Home.vue'),
        redirect: '/admin/login',
        meta: {
            title: "首页"
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/user/Login.vue'),
        meta: {
            title: "登录"
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/user/Register.vue'),
        meta: {
            title: "注册"
        }
    },
    {
        path: '/admin/login',
        name: 'AdminLogin',
        component: () => import('@/views/admin/AdminLogin.vue'),
        meta: {
            title: "管理员登录"
        }
    },
    {
        path: '/admin/main',
        name: 'MainDash',
        component: () => import('@/views/admin/MainDash.vue'),
        meta: {
            title: "控制面板"
        },
        children: [
            {
                path: 'user',
                name: 'User',
                component: () => import('@/views/admin/user/User.vue'),
                meta: {
                    title: "用户角色"
                },
            },
            {
                path: 'role',
                name: 'Role',
                component: () => import('@/views/admin/user/Role.vue'),
                meta: {
                    title: "角色维护"
                },
            },
            {
                path: 'permission',
                name: 'Permission',
                component: () => import('@/views/admin/user/Permission.vue'),
                meta: {
                    title: "菜单维护"
                },
            },
            {
                path: 'operation',
                name: 'Operation',
                component: () => import('@/views/admin/user/Operation.vue'),
                meta: {
                    title: "菜单维护"
                },
            },
            {
                path: 'auth-cert',
                name: 'AuthCert',
                component: () => import('@/views/admin/auth/AuthCert.vue'),
                meta: {
                    title: "实名认证审核"
                },
            },
            {
                path: 'auth-adv',
                name: 'AuthAdv',
                component: () => import('@/views/admin/auth/AuthAdv.vue'),
                meta: {
                    title: "广告审核"
                },
            },
            {
                path: 'auth-project',
                name: 'AuthProject',
                component: () => import('@/views/admin/auth/AuthProject.vue'),
                meta: {
                    title: "项目审核"
                },
            },
            {
                path: 'cert',
                name: 'Cert',
                component: () => import('@/views/admin/business/Cert.vue'),
                meta: {
                    title: "资质维护"
                },
            },
            {
                path: 'type',
                name: 'Type',
                component: () => import('@/views/admin/business/Type.vue'),
                meta: {
                    title: "分类管理"
                },
            },
            {
                path: 'process',
                name: 'Process',
                component: () => import('@/views/admin/business/Process.vue'),
                meta: {
                    title: "流程管理"
                },
            },
            {
                path: 'advertisement',
                name: 'Advertisement',
                component: () => import('@/views/admin/business/Advertisement.vue'),
                meta: {
                    title: "广告管理"
                },
            },
            {
                path: 'message',
                name: 'Message',
                component: () => import('@/views/admin/business/Message.vue'),
                meta: {
                    title: "消息模板"
                },
            },
            {
                path: 'project-type',
                name: 'ProjectType',
                component: () => import('@/views/admin/business/ProjectType.vue'),
                meta: {
                    title: "项目分类"
                },
            },
            {
                path: 'tag',
                name: 'Tag',
                component: () => import('@/views/admin/business/Tag.vue'),
                meta: {
                    title: "项目标签"
                },
            },
            {
                path: 'param',
                name: 'Param',
                component: () => import('@/views/admin/param/Param.vue'),
                meta: {
                    title: "参数管理"
                },
            },
        ]
    },
    {
        path: '/project-list',
        name: 'ProjectList',
        component: () => import('@/views/project/ProjectList.vue'),
    },
    {
        path: '/start',
        name: 'start',
        component: () => import('@/views/start/Start.vue'),
    },
    {
        path: '/mine-crowd-funding',
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
