import axios from '@/utils/axios'

/**
 * @description: 户列表
 * @param {type}
 * @return:
 */
const adminApi = {
    login: 'admin/login',
    list: 'admin/list',
    add: 'admin/add',
    update: 'admin/update',
    delete: 'admin/delete',
    assign :"admin/assign",
    assignAdd :"admin/assign/add"
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

/**
 * 获取分配角色
 * @param params
 * @returns {AxiosPromise}
 */
const AdminAssign = (params) => {
    return axios.get(adminApi.assign, params)
};
/**
 * 添加分配角色
 * @param params
 * @returns {AxiosPromise}
 */
const addAssign = (params) => {
    return axios.post(adminApi.assignAdd, params)
};


export {adminLogin, adminList, updateAdmin, addAdmin, deleteAdmin,AdminAssign,addAssign}