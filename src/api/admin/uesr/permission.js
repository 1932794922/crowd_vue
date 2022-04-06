import axios from '@/utils/axios'

//菜单管理列表
const menuApi = {
    list: 'menu/list',
    add: 'menu/add',
    update: 'menu/update',
    delete: 'menu/delete'
}

const menuList = (params) => {
    return axios.get(menuApi.list, params)
};

const updateMenu = (params) => {
    return axios.post(menuApi.update, params)
};

const addMenu = (params) => {
    return axios.post(menuApi.add, params)
};

const deleteMenu = (params) => {
    return axios.delete(menuApi.delete, params)
};



export { menuList, updateMenu, addMenu, deleteMenu}