/**
 * 项目集资
 */

import axios from '@/utils/axios'

const projectApi = {
    creat: 'project/save', // 项目集资
    return: 'project/return/save', // 回报设置
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