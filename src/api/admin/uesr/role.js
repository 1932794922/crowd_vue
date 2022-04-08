import axios from '@/utils/axios'

/**
 * @description: 获取角色列表
 * @type {{add: string, update: string, list: string, delete: string}}
 */
const roleApi = {
    list: 'role/list',
    add: 'role/add',
    update: 'role/update',
    delete: 'role/delete',
}

const roleList = (params) => {
    return axios.get(roleApi.list, params)
};

const updateRole = (params) => {
    return axios.post(roleApi.update, params)
};

const addRole = (params) => {
    return axios.post(roleApi.add, params)
};

const deleteRole = (params) => {
    return axios.post(roleApi.delete, params)
};



export { roleList, updateRole, addRole, deleteRole}