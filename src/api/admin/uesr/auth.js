import axios from '@/utils/axios'

/**
 * @description: Operation.vue用户操作权限 CRUD
 * @type {{add: string, update: string, list: string, delete: string}}
 */
const authApi = {
    list: 'auth/list',
    add: 'auth/add',
    update: 'auth/update',
    delete: 'auth/delete'
}

const authList = (params) => {
    return axios.get(authApi.list, params)
};

const updateAuth = (params) => {
    return axios.post(authApi.update, params)
};

const addAuth = (params) => {
    return axios.post(authApi.add, params)
};

const deleteAuth = (params) => {
    return axios.post(authApi.delete, params)
};

export {authList, updateAuth, addAuth, deleteAuth}