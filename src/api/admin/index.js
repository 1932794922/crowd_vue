import axios from '@/utils/axios'

const adminApi = {
    login: 'admin/login',
    list: 'admin/list',
    add: 'admin/add',
    update: 'admin/update',
    delete: 'admin/delete'
}

/**
 * 管理员登录
 * @param params
 * @returns {AxiosPromise}
 */
const adminLogin = (params) => {
    return axios.post(adminApi.login, params)
};

const adminList = (params) => {
    return axios.get(adminApi.list, params)
};

const updateAdmin = (params) => {
    return axios.post(adminApi.update, params)
};

const addAdmin = (params) => {
    return axios.post(adminApi.add, params)
};

const deleteAdmin = (params) => {
    return axios.post(adminApi.delete, params)
};



export {adminLogin, adminList, updateAdmin, addAdmin, deleteAdmin}