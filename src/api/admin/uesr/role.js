import axios from '@/utils/axios'

/**
 * @description: 获取角色列表
 */
const roleApi = {
    list: 'role/list',
    add: 'role/add',
    update: 'role/update',
    delete: 'role/delete',
    assign :"role/assign",
    assignAdd :"role/assign/add"
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

/**
 * 获取分配权限
 */
const roleAssignList = (params) => {
    return axios.get(roleApi.assign, params)
};
/**
 * 添加分配权限
 */
const addRoleAssign = (params) => {
    return axios.post(roleApi.assignAdd, params)
};

export { roleList, updateRole, addRole, deleteRole,addRoleAssign,roleAssignList }