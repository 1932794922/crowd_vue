/**
 * 项目集资
 */

import axios from '@/utils/axios'

const projectApi = {
    creat: 'project/save', // 项目集资
    return: 'project/return/save', // 回报设置
    confirm: 'project/save/confirm', // 项目集资确认
    get: 'project/get/type/project', // 项目集资确认
    detail:'project/query/project/detail', // 项目详情
}

/**
 * 项目集资
 * @param params
 * @returns {AxiosPromise}
 */
export const creatProjects = (params) => {
    return axios.post(projectApi.creat,params)
}

/**
 * 回报设置
 * @param params
 * @returns {AxiosPromise}
 */
export const creatReturn = (params) => {
    return axios.post(projectApi.return,params)
}


/**
 * 回报设置
 * @param params
 * @returns {AxiosPromise}
 */
export const projectConfirm = (params) => {
    return axios.post(projectApi.confirm,params)
}

export const queryProjectType = () => {
    return axios.get(projectApi.get)
}

export const queryProjectDetail = (id) => {
    return axios.get(projectApi.detail,id)
}